var request = require('request')

module.exports = (emailAddress, password) => {
  let endPointPrefix = 'http://smsgateway.me/api/v3/devices'

  return {
    listOfDevices: (page) => {
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
            reject('Could not retrieve devices.')
          }
        })
      })
    },
    fetchSingleDevice: (id) => {
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
  }
}
