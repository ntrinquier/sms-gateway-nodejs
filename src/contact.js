var request = require('request')

module.exports = (emailAddress, password) => {
  let endPointPrefix = 'http://smsgateway.me/api/v3/contacts'

  return {
    createContact: (name, number) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          uri: endPointPrefix + '/create',
          json: true,
          qs: {
            email: emailAddress,
            password: password,
            name: name,
            number: number,
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
    listOfContacts: (page) => {
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
            reject('Could not retrieve contacts.')
          }
        })
      })
    },
    fetchSingleContact: (id) => {
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
