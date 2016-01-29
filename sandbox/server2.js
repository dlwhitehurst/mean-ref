// ******************************************************
// server.js
//
// written by David L. Whitehurst
// January 27, 2016
//
//


var http = require('http');

http.createServer(function(req,res) {

   // request?
   console.log(req.headers);

   res.writeHead(200, {
	'Content-type':'html-plain'
   });
   res.write('<html>');
   res.write('<body>');
   res.write('<h1>Simple Web Server</h1>');
   res.write('<p>This page was served by a simple Node.js server. In fact, I had to output all this HTML using response.write() methods over and over until all of the HTML was sent from the node server and the response.end() method called. All tags and content had to be typed. This is crude but does show how Node can send a static page over HTTP. My next experiment will be to use the CommonJS module fs or File System. Then I will convert the URL request to a static HTML file on the filesystem. This is cool.</p>');
   res.write('</body></html>');
   res.end();
}).listen(3000);

console.log('Server running at http://localhost:3000/');
