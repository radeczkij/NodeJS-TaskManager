const mongoose = require('mongoose')

const connectionString = ''

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
}

module.exports = connectDB
