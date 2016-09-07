var request = require('request')

module.exports = (emailAddress, password) => {
  let endPointPrefix = 'http://smsgateway.me/api/v3/messages'
  return {
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
            expires_at: expiresAt
          }
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
    }
  }
}
