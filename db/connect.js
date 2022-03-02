const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://bad:12345@cluster0.6hk5z.mongodb.net/Task-Manager?retryWrites=true&w=majority'

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
