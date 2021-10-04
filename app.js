const express = require('express')
const config = require('config')
const app = express()
const mongoose = require('mongoose')

const PORT = config.get('port') || 5000


app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

 const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (e) {
    console.log('server Error', e.message);
    process.exit(1)
  }
}

start()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))