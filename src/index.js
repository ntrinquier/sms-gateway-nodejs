module.exports = (emailAddress, password) => {
  return {
    contact: require('./contact')(emailAddress, password),
    device: require('./device')(emailAddress, password),
    message: require('./message')(emailAddress, password),
  }
}
