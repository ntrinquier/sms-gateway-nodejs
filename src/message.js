const request = require('request');

module.exports = (email, password) => {
  const endPointPrefix = 'https://smsgateway.me/api/v3/messages'

  return {
    listOfMessages: (page) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'GET',
          mode: 'no-cors',
          uri: `${endPointPrefix}/`,
          json: true,
          qs: {
            email,
            password,
            page,
          },
        }, (error, response, body) => {
          if (error) {
            reject(error)
          } else if (body.result) {
            resolve(body.result)
          } else {
            reject('Could not retrieve messages.')
          }
        })
      })
    },
    fetchSingleMessage: (id) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'GET',
          mode: 'no-cors',
          uri: `${endPointPrefix}/view/${id}`,
          json: true,
          qs: {
            email,
            password,
          },
        }, (error, response, body) => {
          if (error) {
            reject(error)
          } else if (body.success) {
            resolve(body.result)
          } else {
            reject(body.errors)
          }
        })
      })
    },
    sendMessageToNumber: (device, number, message, sendAt, expiresAt) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          mode: 'no-cors',
          uri: `${endPointPrefix}/send`,
          json: true,
          qs: {
            email,
            password,
            device,
            number,
            message,
            send_at: sendAt,
            expires_at: expiresAt,
          },
        }, (error, response, body) => {
          if (error) {
            reject(error)
          } else if (body.result.success.length) {
            resolve(body.result.success[0])
          } else if (body.result.fails.length) {
            reject(body.result.fails)
          } else {
            reject('Could not send message.')
          }
        })
      })
    },
    sendMessageToNumbers: (device, number, message, sendAt, expiresAt) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          mode: 'no-cors',
          uri: `${endPointPrefix}/send`,
          json: true,
          qs: {
            email,
            password,
            device,
            number,
            message,
            send_at: sendAt,
            expires_at: expiresAt,
          },
        }, (error, response, body) => {
          if (error) {
            reject(error)
          } else if (body.result.success.length) {
            resolve(body.result.success[0])
          } else if (body.result.fails.length) {
            reject(body.result.fails)
          } else {
            reject('Could not send message.')
          }
        })
      })
    },
    sendMessageToContact: (device, contact, message, sendAt, expiresAt) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          mode: 'no-cors',
          uri: `${endPointPrefix}/send`,
          json: true,
          qs: {
            email,
            password,
            device,
            contact,
            message,
            send_at: sendAt,
            expires_at: expiresAt,
          },
        }, (error, response, body) => {
          if (error) {
            reject(error)
          } else if (body.result.success.length) {
            resolve(body.result.success[0])
          } else if (body.result.fails.length) {
            reject(body.result.fails)
          } else {
            reject('Could not send message.')
          }
        })
      })
    },
    sendMessageToContacts: (device, contact, message, sendAt, expiresAt) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          mode: 'no-cors',
          uri: `${endPointPrefix}/send`,
          json: true,
          qs: {
            email,
            password,
            device,
            contact,
            message,
            send_at: sendAt,
            expires_at: expiresAt,
          },
        }, (error, response, body) => {
          if (error) {
            reject(error)
          } else if (body.result.success.length) {
            resolve(body.result.success[0])
          } else if (body.result.fails.length) {
            reject(body.result.fails)
          } else {
            reject('Could not send message.')
          }
        })
      })
    },
    sendMessagesToRecipients: (data) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          mode: 'no-cors',
          uri: `${endPointPrefix}/send`,
          json: true,
          form: data,
        }, (error, response, body) => {
          if (error) {
            reject(error)
          } else if (body.result.success.length) {
            resolve(body.result.success[0])
          } else if (body.result.fails.length) {
            reject(body.result.fails)
          } else {
            reject('Could not send message.')
          }
        })
      })
    },
  }
}
