var fs = require('fs');
var system = require('system');
var page = require('webpage').create();

window.__dirname = phantom.libraryPath;
window.__filename = phantom.libraryPath + "/" + phantom.scriptName;

if (system.args.length < 3) {
  console.log("Usage: echoToFile.js DESTINATION_FILE <arguments to echo...>");
  phantom.exit(1);
} else {
  var xml = fs.read(system.args[1]);
  var xslt = fs.read(system.args[2]);
}

var url = "file://" + __dirname + '/index.html?';

page.onConsoleMessage = function(msg) { console.log(msg); };
page.open(url, function(status) {
  setTimeout(function() {
    var doc = page.evaluate(function(_xml, _xslt) {
      var result = Saxon.run({
        source: Saxon.parseXML(_xml),
        logLevel: "SEVERE",
        stylesheet: Saxon.parseXML(_xslt)
      }).getResultDocument();

      return Saxon.serializeXML(result);
    }, xml, xslt);
    console.log(doc)
    phantom.exit(0);
  });
});
