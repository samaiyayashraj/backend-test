/*
 * @file: user.js
 * @description: It Contain function layer for user controller.
 * @author: Jasdeep Singh
 */

import { successAction, failAction } from '../utilities/response';
import {
  save,
  onLogin,
  onSocialLogin,
  forgotPass,
  validateUserEmail,
  updatePassword,
  userLogout,
  usernames,
  OTP,
  updateUser,
  getGeoAddress,
  verifyUser,
  userAccountSetup
} from '../services/user';
import Message from '../utilities/messages';

/**************** User signup/register ***********/
export const register = async (req, res, next) => {
  const payload = req.body;
  try {
    const data = await save(payload);
    res.status(200).json(successAction(data, Message.registerSuccess));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/**************** Login user ***********/
export const login = async (req, res, next) => {
  const payload = req.body;
  try {
    const data = await onLogin(payload);
    res.status(200).json(successAction(data, Message.success));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/**************** Social login *************/
export const socialLogin = async (req, res, next) => {
  const payload = req.body;
  try {
    const data = await onSocialLogin(payload);
    res.status(200).json(successAction(data, Message.success));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/**************** Forgot password ***********/
export const forgotPassword = async (req, res, next) => {
  const payload = req.body;
  try {
    await forgotPass(payload);
    res.status(200).json(successAction(null, Message.passEmail));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/**************** Forgot password ***********/
export const validateEmail = async (req, res, next) => {
  const payload = req.query;
  try {
    const data = await validateUserEmail(payload);
    res.status(200).json(successAction(data));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/************* Change password ***********/
export const changePassword = async (req, res, next) => {
  const payload = req.body;
  payload.userId = req.user._id;
  payload.token = req.user.token;
  try {
    await updatePassword(payload);
    res.status(200).json(successAction(null, Message.updatePassword));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/*********** Logout user *************/
export const logout = async (req, res, next) => {
  const payload = { userId: req.user._id };
  payload.token = req.user.token;
  try {
    await userLogout(payload);
    res.status(200).json(successAction(null, Message.success));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/*********** Verify username and list down sugestion *************/
export const verifyUsername = async (req, res, next) => {
  const payload = req.query;
  try {
    const data = await usernames(payload);
    res.status(200).json(successAction(data, Message.success));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/************* Send and verify OTP for number verification ***************/
export const verifyOTP = async (req, res, next) => {
  const payload = req.body;
  payload.userId = req.user._id;
  try {
    const message =
      payload.type === 'send_otp' ? Message.otpSent : Message.otpVerified;
    await OTP(payload);
    res.status(200).json(successAction(null, message));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/************ Update user **************/
export const update = async (req, res, next) => {
  const payload = req.body;
  payload.userId = req.user._id;
  try {
    await updateUser(payload);
    res.status(200).json(successAction(null, Message.profileUpdate));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/************ Get Geo address **************/
export const getGeoLocation = async (req, res, next) => {
  const payload = req.query;
  try {
    const data = await getGeoAddress(payload.ip);
    res.status(200).json(successAction(data, Message.success));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/************ Verify Account **************/
export const verifyAccount = async (req, res, next) => {
  const {_id, token} = req.user;
  try {
    await verifyUser({_id, token});
    res.status(200).json(successAction(null, Message.emailVerified));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};
/************ Verify Account **************/
export const accountSetup = async (req, res, next) => {
  const payload = req.body;
  payload.userId = req.user._id;
  try {
    const data = await userAccountSetup(payload);
    res.status(200).json(successAction(data, Message.accountSetup));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};