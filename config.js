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
  }
}