'use strict';

module.exports = function (emailAddress, password) {
  return {
    contact: require('./contact')(emailAddress, password),
    device: require('./device')(emailAddress, password),
    message: require('./message')(emailAddress, password)
  };
};