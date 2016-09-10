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

## `Contact`

* <a href="#createContact">`createContact`</a>
* <a href="#listOfContacts">`listOfContacts`</a>
* <a href="#fetchSingleContact">`fetchSingleContact`</a>

<!-- /div -->

<!-- div -->

## `Device`

* <a href="#listOfDevices">`listOfDevices`</a>
* <a href="#fetchSingleDevice">`fetchSingleDevice`</a>

<!-- /div -->

<!-- div -->

## `Messages`

* <a href="#listOfMessages">`listOfMessages`</a>
* <a href="#fetchSingleMessage">`fetchSingleMessage`</a>
* <a href="#sendMessageToNumber">`sendMessageToNumber`</a>
* <a href="#sendMessageToNumbers">`sendMessageToNumbers`</a>
* <a href="#sendMessageToContact">`sendMessageToContact`</a>
* <a href="#sendMessageToContacts">`sendMessageToContacts`</a>
* <a href="#sendMessagesToRecipients">`sendMessagesToRecipients`</a>

<!-- /div -->

## `“Contacts” Methods`

<!-- div -->

### <a id="createContact"></a>`createContact(page)`

Create a contact.

#### Arguments
1. `name` *(String)*: The contact's name
1. `number` *(String)*: The contact's number

#### Example
```js
smsGateway.contact.createContact('Nicolas', '+33612121212')
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

<!-- div -->

### <a id="listOfContacts"></a>`listOfContacts(page)`

Get a list of the contacts.

#### Arguments
1. `page` *(String)*: The page number

#### Example
```js
smsGateway.contact.listOfContacts(2)
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

<!-- div -->

### <a id="fetchSingleContact"></a>`fetchSingleContact(id)`

Get a specific contact.

#### Arguments
1. `id` *(String)*: The contact ID

#### Example
```js
smsGateway.contact.fetchSingleContact(2182)
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

## `“Devices” Methods`

<!-- div -->

### <a id="listOfDevices"></a>`listOfDevices(page)`

Get a list of the devices.

#### Arguments
1. `page` *(String)*: The page number

#### Example
```js
smsGateway.device.listOfDevices(2)
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

<!-- div -->

### <a id="fetchSingleDevice"></a>`fetchSingleDevice(id)`

Get a specific device.

#### Arguments
1. `id` *(String)*: The device ID

#### Example
```js
smsGateway.device.fetchSingleDevice(2182)
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

## `“Messages” Methods`

<!-- div -->

### <a id="listOfMessages"></a>`listOfMessages(page)`

Get a list of the messages.

#### Arguments
1. `page` *(String)*: The page number

#### Example
```js
smsGateway.message.listOfMessages(2)
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

<!-- div -->

### <a id="fetchSingleMessage"></a>`fetchSingleMessage(id)`

Get a specific message.

#### Arguments
1. `id` *(String)*: The message ID

#### Example
```js
smsGateway.message.fetchSingleMessage(2182)
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

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
smsGateway.message.sendMessageToNumber('2012', '+33123456789', 'Hello world :)')
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

<!-- div -->

### <a id="sendMessageToNumbers"></a>`sendMessageToNumbers(device, numbers, message, [sendAt], [expiresAt])`

Send a message to numbers.

#### Arguments
1. `device` *(String)*: The ID of device you wish to send the message from
2. `numbers` *(Array)*: The numbers to send the message to
3. `message` *(String)*: The content of the message to be sent
4. `[sendAt=undefined]` *(String)*: Time to send the message in Unix Time format
5. `[expiresAt=undefined]` *(String)*: Time to give up trying to send the message at in Unix Time format

#### Example
```js
smsGateway.message.sendMessageToNumbers('2012', ['+33123456789', '+33987654321'], 'Penguins rock!')
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

<!-- div -->

### <a id="sendMessageToContact"></a>`sendMessageToContact(device, contact, message, [sendAt], [expiresAt])`

Send a message to a contact.

#### Arguments
1. `device` *(String)*: The ID of device you wish to send the message from
2. `contact` *(String)*: The contact to send the message to
3. `message` *(String)*: The content of the message to be sent
4. `[sendAt=undefined]` *(String)*: Time to send the message in Unix Time format
5. `[expiresAt=undefined]` *(String)*: Time to give up trying to send the message at in Unix Time format

#### Example
```js
smsGateway.message.sendMessageToContact('2012', '30', 'Hello world :)')
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

<!-- div -->

### <a id="sendMessageToContacts"></a>`sendMessageToContacts(device, contacts, message, [sendAt], [expiresAt])`

Send a message to contacts.

#### Arguments
1. `device` *(String)*: The ID of device you wish to send the message from
2. `contacts` *(Array)*: The contacts to send the message to
3. `message` *(String)*: The content of the message to be sent
4. `[sendAt=undefined]` *(String)*: Time to send the message in Unix Time format
5. `[expiresAt=undefined]` *(String)*: Time to give up trying to send the message at in Unix Time format

#### Example
```js
smsGateway.message.sendMessageToContacts('2012', ['5', '30'], 'Penguins rock!')
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->

<!-- div -->

### <a id="sendMessagesToRecipients"></a>`sendMessagesToRecipients(data)`

Send messages to numbers or contacts.

#### Arguments
1. `data` *(Array)*: Objects containing the messages to send, at the following format:
  1. `device` *(String)*: The ID of device you wish to send the message from
  2. `contact|number` *(String)*: The contact or number to send the message to
  3. `message` *(String)*: The content of the message to be sent
  4. `[sendAt=undefined]` *(String)*: Time to send the message in Unix Time format
  5. `[expiresAt=undefined]` *(String)*: Time to give up trying to send the message at in Unix Time format

#### Example
```js
smsGateway.message.sendMessagesToRecipients([{
  device: '2190',
  contact: '42',
  message: 'Hi!',
}, {
  device: '2109',
  number: '+33123456789',
  message: 'Hello!',
}])
.then((response) => {
  // do something with response
})
.catch((error) => {
  // handle error
})
```

<!-- /div -->
