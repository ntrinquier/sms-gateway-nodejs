const request = require('request');

module.exports = (email, password) => {
  const endPointPrefix = 'https://smsgateway.me/api/v3/contacts'

  return {
    createContact: (name, number) => {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          mode: 'no-cors',
          uri: `${endPointPrefix}/create`,
          json: true,
          qs: {
            email,
            password,
            name,
            number,
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
            reject('Could not retrieve contacts.')
          }
        })
      })
    },
    fetchSingleContact: (id) => {
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
