module.exports = (emailAddress, password) => {
  return {
    message: require('./message')(emailAddress, password)
  }
}
