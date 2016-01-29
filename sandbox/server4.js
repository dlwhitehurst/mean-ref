var util = require('./modules/wcat');
var connect = require('connect');
var app = connect();

var logger = function(req,res,next) {
   console.log(req.method, req.url);

   next();
};

var helloWorld = function(req,res,next) {
   res.setHeader('Content-type', 'text-plain');
   res.end('Hello World');
};

var goodbyeWorld = function(req,res,next) {
   res.setHeader('Content-type', 'text-plain');
   res.end('Goodbye World');
};

var hostfile = function(req,res,next) {
   res.setHeader('Content-type','text-plain');
   util.wcat('/etc/hosts', function(listing) {
     res.end(listing);
   });
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.use('/hosts', hostfile);
app.listen(3000);

console.log('Server running at http://localhost:3000');
