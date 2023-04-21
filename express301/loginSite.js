const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');

const cookieParser = require('cookie-parser');


app.use(helmet());
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())



app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use((req, res, next) => {
  if(req.query.msg === 'fail') {
    res.locals.msg = `Check your username or password again.`;
  }else {
    res.locals.msg = ``;
  }
  next();
})

app.get('/',(req, res, next) => {
  res.send('Sanity Check');
} )

app.get('/login', (req, res, next) => {
  // console.log(req.query);
  const msg = req.query.msg;
  if(msg === 'fail') {
    // someting...
  }
  res.render('login');
})

app.post('/process_login',(req, res, next) => {
  // request body is made by urlencoded(), which parses the http message for sent data!
  const { username, password } = req.body
  if(password === "x") {
    // res.cookie takes 2 args:
    // 1. name of the cookie
    // 2. value to set it to
    res.cookie('username',username);

    
    res.redirect('/welcome')
  } else {
    res.redirect('/login?msg=fail&test=hello')
  }
  // res.json(req.body);
})

app.get('/welcome',(req, res, next) => {
  res.render('welcome',{
    username: req.cookies.username
  });
})

// in a route, anytime something has a colon in front, it is a wildcard
// wildcard will match anything in that slot
app.get('/story/:storyId',(req, res, next) => {
  // the req.params object always exists
  // it will have a property for each wildcard in the route
  res.send(`<h1>Story ${req.params.storyId}</h1>`)
  // res.send('<h1>Story 1</h1>')
})

app.get('/story/:storyId/:linkId',(req, res, next) => {
  res.send(`<h1>Story ${req.params.storyId} - ${req.params.linkId}</h1>`)
})

// app.get('/story/1',(req, res, next) => {
//   res.send('<h1>Story 1</h1>')
// })

app.get('/statement',(req, res, next) => {

  // This will render the statement IN the browser
  // res.sendFile(path.join(__dirname,'userStatements/BankStatementChequing.png'));

  // app has a download method, Takes 2 args:
  // 1. filename
  // 2. optionally, what you want the filname to download as
  // 3. error handler
  const date = new Date().toISOString()
  res.download(
    path.join(
    __dirname,'userStatements/BankStatementChequing.png'),
    `yourstatement ${date}`,
    (error) => {
      if(error && !res.headersSent) {
        res.redirect('/download/error')
      }
  })
})

app.get('/logout', (req, res, next) => {
  res.clearCookie('username');
  res.redirect('/login');
})

app.listen(3000);