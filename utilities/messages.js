/* -----------------------------------------------------------------------
   * @ description : Main module to include all the messages used in project.
----------------------------------------------------------------------- */

export default {
  accept: 'Accepted',
  confirm: 'Confirmed',
  success: 'Success!',
  systemError: 'Technical error ! Please try again later.',
  userNameAlreadyExists: 'Username is already exist!',
  emailAlreadyExists: 'Email is already registered with us.',
  emailNotExists: 'Email is not registered with us.',
  phoneNumberNotExists: 'Phone Number not registered.',
  registerSuccess: 'Your account has been registered successfully! Please check email to verify account.',
  tokenExpired: 'Session Expired.',
  tokenVerified: 'Token has been verified',
  loginSuccessfull: 'Logged in successfully.',
  logoutSuccessfull: 'Logged out successfully.',
  invalidCredentials: 'Invalid credentials.',
  profileUpdate: 'Profile successfully updated.',
  unauthorizedUser: 'You are not an authorized user for this action.',
  userAuthenticated: 'User authenticated successfully.',
  verifyTokenExpired: 'Token has been expired.',
  userBlocked: 'Your account has been blocked by admin.',
  passEmail: 'Your password is sent on your register email.',
  updatePassword: 'Password is updated successfully.',
  verifyEmail: 'Account email is not verified! Please check email to verify your account.',
  emailVerified: 'Your account email has been successfully verified!',
  accountSetup: 'Your account has been setup done!',
  /************* Competitions ****************/
  competitionAdded: 'Competition added successfully.',
  competitionUpdated: 'Competition updated successfully.',
  competitionDeleted: 'Competition successfully deleted.',
  /************* Promo Code ****************/
  codeAdded: 'Promo Code added successfully.',
  codeUpdated: 'Promo Code updated successfully.',
  codeDeleted: 'Promo Code successfully deleted.',
  promoCodeNotExist: 'Promo code does not exist.',
  /*************** Game Play **************/
  scoreUpdated: 'Game score successfully updated.',
  paymentFaild: 'Please try again!',
  noCompetitionActive: 'No Active competition!',
  /********* OTP ************/
  otpSent: 'OTP sent on your number.',
  invalidOtp: 'Invalid OTP!.',
  otpVerified: 'OTP is successfully verified.',
  otpMessage: (otp) => `hi\n your otp is: ${otp}.`,
  otpSubject: 'OTP',
  /*********** Page *********/
  upsert: 'Page upsert successfully!',
  notFound: 'Page not found!'
};
