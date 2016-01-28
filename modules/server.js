// server.js - uses hello module as a function
var hello = require('./hello');
var cat = require('./wcat');

cat.wcat('/etc/hosts', function(text) {
  console.log(text);
});
hello();
