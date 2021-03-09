'use strict'

const crypto = use('crypto');
const Const = use('App/Common/Const');

/**
 * Generate "random" alpha-numeric string.
 *
 * @param  {int}      length - Length of the string
 * @return {string}   The result
 */
const randomString = async (length = 40) => {
  let string = ''
  let len = string.length

  if (len < length) {
    let size = length - len
    let bytes = await crypto.randomBytes(size)
    let buffer = new Buffer(bytes)

    string += buffer
      .toString('base64')
      .replace(/[^a-zA-Z0-9]/g, '')
      .substr(0, size)
  }

  return string
};

const checkRole = (params, extraData) => {
  return {
    ...params,
    role: params.type === Const.USER_TYPE_PREFIX.ICO_OWNER ? Const.USER_ROLE.ICO_OWNER : Const.USER_ROLE.PUBLIC_USER,
  }
};

// const checkType = (params, extraData) => {
//   return {
//     ...extraData,
//     role: params.type === Const.USER_TYPE_PREFIX.ICO_OWNER ? Const.USER_TYPE.WHITELISTED : Const.USER_TYPE.REGULAR,
//   }
// };

const responseErrorInternal = (message = 'Server Error !') => {
  return {
    status: 500,
    message,
    data: null,
  }
};

const responseNotFound = (message = 'Not Found !') => {
  return {
    status: 404,
    message,
    data: null,
  }
};

const responseBadRequest = (message = 'Bad Request !') => {
  return {
    status: 400,
    message,
    data: null,
  }
};

const responseSuccess = (data = null, message = 'Success !') => {
  return {
    status: 200,
    message,
    data,
  }
};

module.exports = {
  randomString,
  responseSuccess,
  responseNotFound,
  responseErrorInternal,
  responseBadRequest,
};
