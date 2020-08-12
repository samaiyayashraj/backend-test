/*
 * @file: user.js
 * @description: It Contain function layer for user service.
 * @author: Jasdeep Singh
 */
import config from 'config';
import AWS from 'aws-sdk';
import geoip from 'geoip-lite';
import User from '../collections/user';
import Message from '../utilities/messages';
import {
  encryptpassword,
  decryptpassword,
  generateToken,
  generateRandom,
  getLoginType,
} from '../utilities/universal';
import * as Mail from '../utilities/mail';
const { apiVersion, accessKey, secretKey, region } = config.get('aws');
const { webUrl } = config.get('app');
/********** AWS configration setup *************/
AWS.config.update({
  apiVersion: apiVersion,
  region: region,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
});

/************ User register *************/
export const save = async (payload) => {
  if (await User.checkEmail(payload.email))
    throw new Error(Message.emailAlreadyExists);
  payload.password = await encryptpassword(payload.password);
  payload.username = `${payload.firstName.toLowerCase()}${generateRandom(
    4,
    false,
  ).toLowerCase()}`;
  payload.location = {
    type: 'Point',
    coordinates: [0,0]
  };
  payload.status = 0;
  const userData = await User.saveUser(payload);
  const token = generateToken({
      _id: userData._id,
      role: userData.role,
      email: userData.email,
      when: new Date()
  });
  const data = await User.updateUser(
    userData._id,
    {},
    { loginToken: { token } },
  );
  const link = `${webUrl}/account-verification/${token}`;
  const result = await Mail.htmlFromatWithObject({
    data: { firstName: userData.firstName, lastName: userData.lastName, link },
    emailTemplate: 'account-verification',
  });
  const emailData = {
    to: payload.email,
    subject: Mail.subjects.accountVerification,
    obj: result.html,
    templateId: 'account-verification',
  };

  Mail.SENDEMAIL(emailData);

  return {
    _id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    role: data.role,
    profileImage: data.profileImage,
  };
};
/************ User login *************/
export const onLogin = async (payload) => {
  let query = { email: payload.email };
  if(payload['role']){
    query = {...query, role: payload['role']};
  }
  const userData = await User.findOneByCondition(query);
  if (
    !userData ||
    (userData && !(await decryptpassword(payload.password, userData.password)))
  )
    throw new Error(Message.invalidCredentials);
  if (userData.status === 0) throw new Error(Message.verifyEmail);
  if (userData.status === 2) throw new Error(Message.userBlocked);
  const token = generateToken({
    _id: userData._id,
    role: userData.role,
    email: userData.email,
    when: new Date(),
  });
  const data = await User.onLoginDone(userData._id, { ...payload, token });
  return {
    _id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    loginToken: token,
    lastLogin: userData.lastLogin.type,
    role: data.role,
    profileImage: data.profileImage,
    phoneVerification: data.phone.verification,
    phone: data.phone.number,
    accountSetup: data.accountSetup
  };
};
/************ Social login *************/
export const onSocialLogin = async (payload) => {
  const userData = await User.findOneByCondition({
    $or: [
      { [`social.${payload.social.key}`]: payload.social.value },
      { email: payload['email'] || '-' },
    ],
  });
  if (userData && userData.status === 0)
    throw new Error(Message.unauthorizedUser);
  if (userData && userData.status === 2) throw new Error(Message.userBlocked);
  payload.username = `${payload.firstName.toLowerCase()}${generateRandom(
    4,
    false,
  ).toLowerCase()}`;
  payload.password = await encryptpassword(generateRandom(8));
  let data = {},
    token = null;
  if (!userData) {
    data = await User.saveUser({
      ...payload,
      [`social.${payload.social.key}`]: payload.social.value,
    });
    token = generateToken({
      _id: data._id,
      role: data.role,
      email: data.email,
      when: new Date(),
    });
    data = await User.onLoginDone(
      data._id,
      { ...payload, token },
      getLoginType(payload.social.key),
    );
  } else {
    token = generateToken({
      _id: userData._id,
      role: userData.role,
      email: userData.email,
      when: new Date(),
    });
    let updateObject = { ...payload };
    const social = updateObject.social;
    const coordinates = updateObject['location']
      ? updateObject.location.coordinates
      : [];
    delete updateObject.social;
    delete updateObject.location;
    await User.updateUser(userData._id, {
      ...updateObject,
      [`social.${social.key}`]: social.value,
      'lastLogin.loginDate': new Date(),
      'lastLogin.type': getLoginType(social.key),
      'location.type': 'Point',
      'location.coordinates': coordinates,
    });
    data = await User.onLoginDone(
      userData._id,
      { ...payload, token },
      getLoginType(payload.social.key),
    );
  }
  return {
    _id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    loginToken: token,
    lastLogin: userData ? userData.lastLogin.type : '',
    role: data.role,
    profileImage: data.profileImage,
    phoneVerification: data.phone.verification,    
    phone: data.phone.number,
    accountSetup: data.accountSetup
  };
};
/************ Forgot user password *************/
export const forgotPass = async (payload) => {
  const userData = await User.checkEmail(payload.email);
  if (userData){
    const token = generateToken({
      _id: userData._id,
      role: userData.role,
      email: userData.email,
      when: new Date(),
    });
    await User.updateUser(
      userData._id,
      {},
      { loginToken: { token } },
    );
    const link = `${webUrl}/reset-password/${token}`;
    const result = await Mail.htmlFromatWithObject({
      data: { firstName: userData.firstName, lastName: userData.lastName, link },
      emailTemplate: 'forgot-password',
    });
    const emailData = {
      to: payload.email,
      subject: Mail.subjects.forgetPassword,
      obj: result.html,
      templateId: 'forgot-password',
    };
    Mail.SENDEMAIL(emailData);
  }
  return userData;
};
/************ Update user password *************/
export const updatePassword = async (payload) => {
  if (payload.type === 'reset') {
    await User.logout(payload.userId, payload.token);
  }
  return await User.updateUser(payload.userId, {
    password: await encryptpassword(payload.password),
  });
};
/************ validate user email *************/
export const validateUserEmail = async (payload) => {
  return await User.checkEmail(payload.email).select({email:1});
};
/************ Get GEO Address *************/
export const getGeoAddress = async (ip) => {
  return geoip.lookup(ip);
};
/*********** User logout ************/
export const userLogout = async (payload) => {
  return await User.logout(payload.userId, payload.token);
};
/*********** Verify and username sugestions *************/
export const usernames = async (payload) => {
  if (await User.findOneByCondition(payload))
    throw new Error(Message.userNameAlreadyExists);
  return [...new Array(4)].map(
    () =>
      `${payload.username.toLowerCase()}${generateRandom(
        4,
        false,
      ).toLowerCase()}`,
  );
};
/************* Send and verify OTP for number verification ***************/
export const OTP = async (payload) => {
  if (payload.type === 'send_otp') {
    const otp = generateRandom(6, false);
    var params = {
      Message: Message.otpMessage(otp),
      PhoneNumber: payload.number.includes('+')
        ? payload.number
        : '+' + payload.number,
      MessageAttributes: {
        'AWS.SNS.SMS.SenderID': {
          DataType: 'String',
          StringValue: Message.otpSubject,
        },
      },
    };
    await new AWS.SNS().publish(params).promise();
    return await User.updateUser(payload.userId, {
      'phone.number': payload.number,
      'phone.otp': otp,
    });
  } else {
    if (
      !(await User.findOneByCondition({
        _id: payload.userId,
        'phone.otp': payload.number,
      }))
    )
      throw new Error(Message.invalidOtp);
    return await User.updateUser(payload.userId, {
      'phone.otp': '',
      'phone.verification': true,
    });
  }
};
/************ Update user  ***************/
export const updateUser = async (payload) => {
  let updatedObject = {...payload};
  delete updatedObject['role'];
  if(payload['coordinates']){
    updatedObject = {
      ...updatedObject,
      'location.type': 'Point',
      'location.coordinates': payload.coordinates
    };
  }
  if(payload['role']){
    updatedObject = {
      ...updatedObject,
      'roleVerification.status': false,
      'roleVerification.role': payload.role
    };
  }
  return await User.updateUser(payload.userId, updatedObject);
};

/************ Update user  ***************/
export const verifyUser = async ({_id, token}) => {
  const updatedObject = {
    loginToken: [],
    status: 1
  };
  return await User.updateByCondition({_id, 'loginToken.token': token}, updatedObject);  
};

/************ User account setup  ***************/
export const userAccountSetup = async (payload) => {
  const updatedObject = {
      ...payload,
      'location.type': 'Point',
      'location.coordinates': payload.coordinates,
      'keys': payload.keys,
      'accountSetup':  true,
  };
  delete updatedObject.coordinates;
  const data = await User.updateUser(payload.userId, updatedObject); 
  return ({
    keys: data.keys,
    country: data.country,
    address: data.address,
    location: data.location.coordinates
  }); 
};