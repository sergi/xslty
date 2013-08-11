#!/usr/bin/env node

var exec = require('child_process').exec;
var path = require("path");

var args = process.argv.slice(0);
if (args.length < 3) {
  console.log("Usage: xslty SOURCE_XML XSLT_FILE");
}
else {
  var file = path.resolve(__dirname, "../xslty.js");
  var source = args[2];
  var sheet = args[3];

  exec('phantomjs ' + file + ' ' + source + ' ' + sheet,
       function (error, stdout, stderr) {
         console.log(stdout);
         console.log(stderr);
         if (error !== null) {
           console.log('error: ' + error);
         }
       });
}
