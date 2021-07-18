const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const filesRoute = require('./routes/files')

app.use('/file', filesRoute)

app.listen(5000)