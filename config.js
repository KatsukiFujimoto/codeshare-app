'use strict'

require('dotenv').config();

module.exports = {
  mailer: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.MY_GMAIL_ADDRESS,
      pass: process.env.MY_GMAIL_PASSWORD
    }
  },
  dbConnstring: "mongodb+srv://" + process.env.MLAB_USERNAME + ":" + process.env.MLAB_PASSWORD + "@code4share-ubtb6.mongodb.net/test?retryWrites=true&w=majority",
  sessionKey: 'HaloCode4Share'
}
