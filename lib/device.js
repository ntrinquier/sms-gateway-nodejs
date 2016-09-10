'use strict';

var request = require('request');

module.exports = function (emailAddress, password) {
  var endPointPrefix = 'http://smsgateway.me/api/v3/devices';

  return {
    listOfDevices: function listOfDevices(page) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'GET',
          uri: endPointPrefix + '/',
          json: true,
          qs: {
            email: emailAddress,
            password: password,
            page: page
          }
        }, function (error, response, body) {
          if (error) {
            reject(error);
          } else if (body.result) {
            resolve(body.result);
          } else {
            reject('Could not retrieve devices.');
          }
        });
      });
    },
    fetchSingleDevice: function fetchSingleDevice(id) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'GET',
          uri: endPointPrefix + '/view/' + id,
          json: true,
          qs: {
            email: emailAddress,
            password: password
          }
        }, function (error, response, body) {
          if (error) {
            reject(error);
          } else if (body.success) {
            resolve(body.result);
          } else {
            reject(body.errors);
          }
        });
      });
    }
  };
};