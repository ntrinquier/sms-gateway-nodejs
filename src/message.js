var request = require('request')

module.exports = (emailAddress, password) => {
  let endPointPrefix = 'http://smsgateway.me/api/v3/messages'

  return {
    listOfMessages: (page) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'GET',
          uri: endPointPrefix + '/',
          json: true,
          qs: {
            email: emailAddress,
            password: password,
            page: page,
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
          uri: endPointPrefix + '/view/' + id,
          json: true,
          qs: {
            email: emailAddress,
            password: password,
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
          uri: endPointPrefix + '/send',
          json: true,
          qs: {
            email: emailAddress,
            password: password,
            device: device,
            number: number,
            message: message,
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
    sendMessageToNumbers: (device, numbers, message, sendAt, expiresAt) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          uri: endPointPrefix + '/send',
          json: true,
          qs: {
            email: emailAddress,
            password: password,
            device: device,
            number: numbers,
            message: message,
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
          uri: endPointPrefix + '/send',
          json: true,
          qs: {
            email: emailAddress,
            password: password,
            device: device,
            contact: contact,
            message: message,
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
    sendMessageToContacts: (device, contacts, message, sendAt, expiresAt) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          uri: endPointPrefix + '/send',
          json: true,
          qs: {
            email: emailAddress,
            password: password,
            device: device,
            contact: contacts,
            message: message,
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
          uri: endPointPrefix + '/send',
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
