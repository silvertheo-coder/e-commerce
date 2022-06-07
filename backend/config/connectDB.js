const mongoose = require('mongoose')
require('dotenv').config({ path: './config/config.env' })

// The standard way to connect the database to the server with an async function.
const connectDB = async () => {
  try {
    //   Connection to the DB. there is no need to use any deprication objects inside the connect function.
    const conn = await mongoose.connect(process.env.MONGO_LOCAL)

    console.log(`MongoDB Connected on database: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = { connectDB } // We export the function to the other applications.
