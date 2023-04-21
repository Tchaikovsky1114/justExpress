// NODEJS IS the language (C)
// Express is node

const path = require('path')
// https is a native module
// express equals function createApplication
const express = require('express');
// return val to createApplication()
const app = express();

// serve up static files! Only 1 AudioListener.apply.call. take that nodejs
app.use(express.static('public'))

//  all is a method, and it takes 2 args :
// 1. route
// 2. callback to run if the route is requests
app.all('/', (req, res) => {
  // res.send('hello world');
  console.log(path.join(__dirname + '/node.html'));
  res.sendFile(path.join(__dirname + '/node.html'));
  // Express hanfdles the basic headers (statuscode, mime type)
})

app.all('*',(req , res) => {
  res.send("<h1>404 NOT FOUND</h1>")
})

app.listen(3000);