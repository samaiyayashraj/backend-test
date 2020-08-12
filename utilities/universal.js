/*
 * @file: universal.js
 * @description: It Contain function layer for all commom function.
 * @author: Jasdeep Singh
 */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
// import path from 'path';
// import Jimp from 'jimp';
import User from '../collections/user';
import { failAction } from './response';
import Message from './messages';
import { SOCIAL } from './constants';
const { jwtAlgo, jwtKey } = config.get('app');
const saltRounds = 10;

// password encryption.
export const encryptpassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};
// password decryption.
export const decryptpassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
// Generate random strings.
export const generateRandom = (length = 32, alphanumeric = true) => {
  let data = '',
    keys = '';

  if (alphanumeric) {
    keys = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  } else {
    keys = '0123456789';
  }

  for (let i = 0; i < length; i++) {
    data += keys.charAt(Math.floor(Math.random() * keys.length));
  }

  return data;
};
/*********** Generate JWT token *************/
export const generateToken = (data) =>
  jwt.sign(data, jwtKey, { algorithm: jwtAlgo, expiresIn: '90d' });
/*********** Decode JWT token *************/
export const decodeToken = (token) => jwt.verify(token, jwtKey);
/*********** Verify token *************/
export const checkToken = async (req, res, next) => {
  const token = req.headers['authorization'];
  let decoded = {};
  try {
    decoded = decodeToken(token);
  } catch (err) {
    return res.status(401).json(failAction(Message.tokenExpired, 401));
  }
  const user = await User.checkToken(token);
  if (user) {
    req.user = { ...decoded, token };
    next();
  } else {
    res.status(401).json(failAction(Message.unauthorizedUser, 401));
  }
};

/********* Get login type ***********/
export const getLoginType = (type) => {
  switch (type) {
    case SOCIAL.fbId:
      return 'facebook';
    case SOCIAL.googleId:
      return 'google';
    case SOCIAL.twitterId:
      return 'twitter';
    default:
      return 'default';
  }
};

/********* Generate slug *********/
export const generateSlug = text => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};
/********* Get time ago in string format *********/
export const timeAgo = time => {
  var seconds = Math.floor((new Date() - new Date(time)) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    let text = interval > 1 ? ' years' : ' year';
    return interval + text + ' ago';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    let text = interval > 1 ? ' months' : ' month';
    return interval + text + ' ago';
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    let text = interval > 1 ? ' days' : ' day';
    return interval + text + ' ago';
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    let text = interval > 1 ? ' hours' : ' hour';
    return interval + text + ' ago';
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    let text = interval > 1 ? ' minutes' : ' minute';
    return interval + text + ' ago';
  }
  if (seconds === 0 || seconds === 1) {
    return 'Now';
  }
  return Math.floor(seconds) + ' seconds ago';
};
/************* File upload ***********/
// export const uploadFile = async (buffer, filePath, fileName) => {
//   return await Promise.all([
//     Jimp.read(buffer).then(lenna => {
//       return lenna.write(path.join(__dirname, `${filePath}/original/${fileName}`));
//     }),

//     Jimp.read(buffer).then(lenna => {
//       return lenna
//         .resize(100, 100)
//         .write(path.join(__dirname, `${filePath}/thumbnail/${fileName}`));
//     })
//   ]).then(res => {
//     return res;
//   });
// };