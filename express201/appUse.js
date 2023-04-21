const express = require('express');
const app = express();

// Express's two things
// 1. Router
// 2. Middleware that comprises a webframework
// Req --- M.W --- Res
// Middleware function is ANY function that has access to the req, res, next object.

console.log('server listening port 3000..');

// Req --- M.W --- Res
// Request comes in.
// Express can validate user.
// Express can store somethings in the DB.
// if there is data from the user we need to parse it and store it, Express do that
// Res

function validateUser(req, res, next) {
  res.locals.validated = true
  console.log('Validated RAN!');
  next()
}

// This will run validateUser on All paths, all methods.
app.use(validateUser)

// This will run validateUser on /admin path, all methods.
app.use('/admin',validateUser)

// This will run validateUser on / path, get methods.
app.get('/',validateUser);




app.get('/',(req, res, next) => {
  res.send('<h1>this is Mainpage</h1>')
  console.log('===validated=== ',res.locals.validated)
})

app.get('/admin',(req, res, next) => {
  res.send('<h1>this is Adminpage</h1>')
  console.log('===validated=== ',res.locals.validated)
})

app.listen(3000);