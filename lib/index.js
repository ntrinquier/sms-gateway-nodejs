'use strict';

module.exports = function (emailAddress, password) {
  return {
    message: require('./message')(emailAddress, password)
  };
};