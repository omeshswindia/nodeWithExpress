// const http = require('http')
const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const port = 1234

const app = express()

app.use(bodyParser.urlencoded({extended:false }))



app.use(shopRoutes)
app.use(adminRoutes)

app.use((req,res,next)=>{
  res.status(404).send('<h2>page not found</h2>')
})


// const server = http.createServer(app)

// server.listen(port)
app.listen(port)

console.log("listen server on " + "http://localhost:" + port)