const request = require('request');

module.exports = (email, password) => {
  const endPointPrefix = 'https://smsgateway.me/api/v3/devices'

  return {
    listOfDevices: (page) => {
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
            reject('Could not retrieve devices.')
          }
        })
      })
    },
    fetchSingleDevice: (id) => {
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
  }
}
