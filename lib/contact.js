"use strict";

var request = require('request');

module.exports = function (email, password) {
  var endPointPrefix = 'https://smsgateway.me/api/v3/contacts';
  return {
    createContact: function createContact(name, number) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'POST',
          uri: "".concat(endPointPrefix, "/create"),
          json: true,
          qs: {
            email: email,
            password: password,
            name: name,
            number: number
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
    },
    listOfContacts: function listOfContacts(page) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'GET',
          uri: "".concat(endPointPrefix, "/"),
          json: true,
          qs: {
            email: email,
            password: password,
            page: page
          }
        }, function (error, response, body) {
          if (error) {
            reject(error);
          } else if (body.result) {
            resolve(body.result);
          } else {
            reject('Could not retrieve contacts.');
          }
        });
      });
    },
    fetchSingleContact: function fetchSingleContact(id) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'GET',
          uri: "".concat(endPointPrefix, "/view/").concat(id),
          json: true,
          qs: {
            email: email,
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