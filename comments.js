// Create web server
// 1. Create a web server
// 2. Get the data from the database
// 3. Send the data to the client
// 4. Listen for requests
// 5. Handle requests

const http = require('http');
const fs = require('fs');
const path = require('path');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  // Set header content type
  res.setHeader('Content-Type', 'text/html');

  // Send an html file
  // res.write('<p>Hello, ninjas!</p>');
  // res.write('<p>Hello again, ninjas!</p>');
  // res.end();

  // Send an html file
  // res.setHeader('Content-Type', 'text/html');
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   } else {
  //     // res.write(data);
  //     res.end(data);
  //   }
  // });

  // Send a json file
  // res.setHeader('Content-Type', 'application/json');
  // fs.readFile('./data/users.json', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   } else {
  //     // res.write(data);
  //     res.end(data);
  //   }
  // });

  // Basic routing
  let filePath = './views/';
  switch (req.url) {
    case '/':
      filePath += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      filePath += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      filePath += '404.html';
      res.statusCode = 404;
      break;
  }

  // Send an html file
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});