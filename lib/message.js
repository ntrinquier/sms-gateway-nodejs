"use strict";

var request = require('request');

module.exports = function (email, password) {
  var endPointPrefix = 'https://smsgateway.me/api/v3/messages';
  return {
    listOfMessages: function listOfMessages(page) {
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
            reject('Could not retrieve messages.');
          }
        });
      });
    },
    fetchSingleMessage: function fetchSingleMessage(id) {
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
    },
    sendMessageToNumber: function sendMessageToNumber(device, number, message, sendAt, expiresAt) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'POST',
          uri: "".concat(endPointPrefix, "/send"),
          json: true,
          qs: {
            email: email,
            password: password,
            device: device,
            number: number,
            message: message,
            send_at: sendAt,
            expires_at: expiresAt
          }
        }, function (error, response, body) {
          if (error) {
            reject(error);
          } else if (body.result.success.length) {
            resolve(body.result.success[0]);
          } else if (body.result.fails.length) {
            reject(body.result.fails);
          } else {
            reject('Could not send message.');
          }
        });
      });
    },
    sendMessageToNumbers: function sendMessageToNumbers(device, number, message, sendAt, expiresAt) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'POST',
          uri: "".concat(endPointPrefix, "/send"),
          json: true,
          qs: {
            email: email,
            password: password,
            device: device,
            number: number,
            message: message,
            send_at: sendAt,
            expires_at: expiresAt
          }
        }, function (error, response, body) {
          if (error) {
            reject(error);
          } else if (body.result.success.length) {
            resolve(body.result.success[0]);
          } else if (body.result.fails.length) {
            reject(body.result.fails);
          } else {
            reject('Could not send message.');
          }
        });
      });
    },
    sendMessageToContact: function sendMessageToContact(device, contact, message, sendAt, expiresAt) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'POST',
          uri: "".concat(endPointPrefix, "/send"),
          json: true,
          qs: {
            email: email,
            password: password,
            device: device,
            contact: contact,
            message: message,
            send_at: sendAt,
            expires_at: expiresAt
          }
        }, function (error, response, body) {
          if (error) {
            reject(error);
          } else if (body.result.success.length) {
            resolve(body.result.success[0]);
          } else if (body.result.fails.length) {
            reject(body.result.fails);
          } else {
            reject('Could not send message.');
          }
        });
      });
    },
    sendMessageToContacts: function sendMessageToContacts(device, contact, message, sendAt, expiresAt) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'POST',
          uri: "".concat(endPointPrefix, "/send"),
          json: true,
          qs: {
            email: email,
            password: password,
            device: device,
            contact: contact,
            message: message,
            send_at: sendAt,
            expires_at: expiresAt
          }
        }, function (error, response, body) {
          if (error) {
            reject(error);
          } else if (body.result.success.length) {
            resolve(body.result.success[0]);
          } else if (body.result.fails.length) {
            reject(body.result.fails);
          } else {
            reject('Could not send message.');
          }
        });
      });
    },
    sendMessagesToRecipients: function sendMessagesToRecipients(data) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'POST',
          uri: "".concat(endPointPrefix, "/send"),
          json: true,
          form: data
        }, function (error, response, body) {
          if (error) {
            reject(error);
          } else if (body.result.success.length) {
            resolve(body.result.success[0]);
          } else if (body.result.fails.length) {
            reject(body.result.fails);
          } else {
            reject('Could not send message.');
          }
        });
      });
    }
  };
};