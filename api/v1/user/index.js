/*
 * @file: index.js
 * @description: It's combine all user routers.
 * @author: Jasdeep Singh
 */

import regiter from './register';
import login from './login';
import socialLogin from './social-login';
import forgotPassword from './forgot-password';
import changePassword from './change-password';
import logout from './logout';
import verifyUsername from './verify-username';
import numberOtp from './number-otp';
import update from './update';
import validateEmail from './validate-email';
import geoAddress from './geo-address';
import verifyUser from './verify-user';
import accountSetup from './account-setup';

export default [
  regiter,
  login,
  socialLogin,
  forgotPassword,
  validateEmail,
  changePassword,
  logout,
  verifyUsername,
  numberOtp,
  update,
  geoAddress,
  verifyUser,
  accountSetup
];
