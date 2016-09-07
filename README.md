# sms-gateway-nodejs

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Build Status](https://travis-ci.org/ntrinquier/sms-gateway-nodejs.svg?branch=master)](https://travis-ci.org/ntrinquier/sms-gateway-nodejs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d381f7a23ced40a48f647fb3ca1e6d1e)](https://www.codacy.com/app/trinquier-nico/sms-gateway-nodejs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ntrinquier/sms-gateway-nodejs&amp;utm_campaign=Badge_Grade)
[![Issuestats](http://issuestats.com/github/ntrinquier/sms-gateway-nodejs/badge/pr?style=flat)](http://issuestats.com/github/ntrinquier/sms-gateway-nodejs)
[![Issuestats](http://issuestats.com/github/ntrinquier/sms-gateway-nodejs/badge/issue?style=flat)](http://issuestats.com/github/ntrinquier/sms-gateway-nodejs)

A library to interact with [SMS Gateway](https://smsgateway.me/) API.

## Installation

```
npm install --save sms-gateway-nodejs
```

# Documentation

## `Initialization`

<!-- div -->

#### Arguments
1. `emailAddress` *(String)*: Your smsgateway username
2. `password` *(String)*: Your smsgateway password

#### Example
```js
smsGateway = require('sms-gateway-nodejs')('ntrinquier@provider.com', 'p4ssw0rd')
```

<!--/ div -->

<!-- div -->

## `Messages`

* <a href="#listOfMessages">`listOfMessages`</a>
* <a href="#fetchSingleMessage">`fetchSingleMessage`</a>
* <a href="#sendMessageToNumber">`sendMessageToNumber`</a>
* <a href="#sendMessageToManyNumbers">`sendMessageToManyNumbers`</a>
* <a href="#sendMessageToContact">`sendMessageToContact`</a>
* <a href="#sendMessageToManyContacts">`sendMessageToManyContacts`</a>
* <a href="#sendMessageToManyRecipients">`sendMessageToManyRecipients`</a>

<!-- /div -->

## `“Messages” Methods`

<!-- div -->

### <a id="sendMessageToNumber"></a>`sendMessageToNumber(device, number, message, [sendAt], [expiresAt])`

Send a message to a number.

#### Arguments
1. `device` *(String)*: The ID of device you wish to send the message from
2. `number` *(String)*: The number to send the message to
3. `message` *(String)*: The content of the message to be sent
4. `[sendAt=undefined]` *(String)*: Time to send the message in Unix Time format
5. `[expiresAt=undefined]` *(String)*: Time to give up trying to send the message at in Unix Time format

#### Example
```js
smsGateway.sendMessageToNumber(device, number, message, sendAt, expiresAt)
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->
