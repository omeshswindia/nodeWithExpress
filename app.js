// const http = require('http')
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const port = 1234

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(shopRoutes)
app.use(adminRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


// const server = http.createServer(app)

// server.listen(port)
app.listen(port)

console.log("listen server on " + "http://localhost:" + port)