
console.log('Node is up and running!');

// ****************************************************
// application.js
// 
// written by David L. Whitehurst
// January 27, 2016
//

// we have an express application folks!

var express = require('express');
var hello = require('./modules/hello');
var app = express();

hello();




