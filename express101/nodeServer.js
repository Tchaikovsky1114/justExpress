// // http is native to NodeJS. we just have to ask for it
// const http = require('http')
// // fs = file system module. fs is build into Node. see above.
// // fs gives node access to THIS computers file system.
// const fs = require('fs');

// // the https module has a createServer method
// // takes 1 arg :
// // 1. callback, ballback has 2 args: req, res
// const server = http.createServer((req, res) => {

//   if(req.url === '/') {
//   // res = our way of responding to the requester
//   // http message
//   // 1. start-line - CHECK
//   // 2. header
//   // 3. body 
//   // writeHead takes 2 args:
//   // 1. status code
//   // 2. object for the mime-type
//   res.writeHead(200, {'content-type':'text/html'})
//   // return valueType is Buffer
//   const homepageHTML = fs.readFileSync('node.html');
//   res.write(homepageHTML);
//   res.end();
//   }
//   else if(req.url === '/bootstrap-logo-shadow.png'){
//     res.writeHead(200, {'content-type':'image/png'});
//     const btImage = fs.readFileSync('./bootstrap-logo-shadow.png');
//     res.write(btImage);
//     res.end();
//   }
//   else if(req.url ==='/styles.css'){
//     res.writeHead(200, {'content-type':'text/css'});
//     const css = fs.readFileSync('styles.css');
//     res.write(css);
//     res.end();
//   }
//   else {
//     res.writeHead(404, {'content-type':'text/html'});
//     res.write('<h4>NOT FOUND!</h4>');
//     res.end();
//   }
//   console.log(req.url);
  
// });


// // createServer returns an object with a listen method
// // listen method takes 1 arg:
// // 1. port to listen for http traffic on
// server.listen(3000);