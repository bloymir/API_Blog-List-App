require('dotenv').config()

const PORT = process.env.PORT
const mongoUrl = process.env.MONGO_DB

module.exports = { PORT, mongoUrl }
