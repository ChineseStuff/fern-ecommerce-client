import * as constants from './Constants';

export const signUpValidators = fields => {
  const errors = {};
  if (!fields.handle) {
    errors.handle = constants.ERROR_SIGNUP_EMPTY_NICKNAME;
  }

  if (typeof fields.handle !== 'undefined') {
    if (!fields.handle.match(constants.UNDERSCORE_ALPHANUMERIC_PATTERN)) {
      errors.handle = constants.ERROR_SIGNUP_NICKNAME_NOTMATCH;
    }
  }

  if (!fields.email) {
    errors.email = constants.ERROR_SIGNUP_EMPTY_EMAIL;
  }

  if (typeof fields.email !== 'undefined') {
    let pattern = new RegExp(constants.EMAIL_PATTERN);
    if (!pattern.test(fields.email)) {
      errors.email = constants.ERROR_EMAIL_PATTERN_NOTMATCH;
    }
  }

  if (!fields.password) {
    errors.password = constants.ERROR_SIGNUP_EMPTY_PASSWORD;
  }

  if (typeof fields.password !== 'undefined') {
    let pattern = new RegExp(constants.PASSWORD_PATTERN);
    if (!pattern.test(fields.password)) {
      errors.password = constants.ERROR_SIGNUP_PASSWORD_WEAK;
      errors.weakPassword = constants.ERROR_SIGNUP_PASSWORD_RULES;
    }
  }

  if (!fields.confirmPassword) {
    errors.confirmPassword = constants.ERROR_SIGNUP_EMPTY_REPASSWORD;
  }

  if (fields.confirmPassword !== fields.password) {
    errors.confirmPassword = constants.ERROR_SIGNUP_PASSWORD_NOTMATCH;
  }

  return errors;
};

export const loginValidators = fields => {
  const errors = {};
  if (!fields.email) {
    errors.email = constants.ERROR_LOGIN_EMPTY_EMAIL;
  }

  if (typeof fields.email !== 'undefined') {
    let pattern = new RegExp(constants.EMAIL_PATTERN);
    if (!pattern.test(fields.email)) {
      errors.email = constants.ERROR_EMAIL_PATTERN_NOTMATCH;
    }
  }

  if (!fields.password) {
    errors.password = constants.ERROR_LOGIN_EMPTY_PASSWORD;
  }

  return errors;
};
