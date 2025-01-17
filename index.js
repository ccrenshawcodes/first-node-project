let http = require('http');
let fs = require('fs');
let url = require('node:url');

http.createServer(function(req, res) {
  let path = url.parse(req.url, true);

  if (path.pathname === '/about') {
    filepath = './about.html';
  } else if (path.pathname === '/contact-me'){
    filepath = './contact-me.html';
  } else if (path.pathname === '/') {
    filepath = './index.html';
  } else {
    filepath = './404.html';
  }
  
  fs.readFile(filepath, function(err, data){
    if (err) {
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080);