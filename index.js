process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()



const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

  ; (async function () {

    try {
      await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/', {
        dbName: process.env.MONGO_DB || 'meme'
      })
      console.log('Connected to DB')
    } catch (err) {
      throw new Error(`Error connecting to DB: ${err}`)
    }

    try {
      const app = express()
        .use(cors())
        .use(morgan('combined'))
        .use(express.json())
        .use('/api', require('./routes'))

      const PORT = process.env.PORT || 2222
      app.listen(PORT, (err) => {
        if (err) {
          throw new Error(err)
        }
        console.info('>'.repeat(40))
        console.info('💻  Reboot Server Live')
        console.info(`📡  PORT: http://localhost:${PORT}`)
        console.info('>'.repeat(40) + '\n')
      })
    } catch (err) {
      throw new Error(err)
    }

  })()

