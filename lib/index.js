'use strict';

module.exports = function (emailAddress, password) {
  return {
    device: require('./device')(emailAddress, password),
    message: require('./message')(emailAddress, password)
  };
};