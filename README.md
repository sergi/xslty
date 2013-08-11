# XSLTy

Xslty is a simple command-line utility that transforms XML using [XSLT 2.0](http://www.w3.org/TR/xslt20/) and outputs it to `stdout`. I made it to scratch my own itch, so it might not suit your needs, but it probably will if you just need to transform XML.

## Requirements

XSLTy requires [PhantomJS](http://phantomjs.org/) to be installed. This is because XSLTy uses Saxon CE to parse XSLT 2.0, and that's a browser library.

In case you don't have PhantomJS installed, you can install it easy on OSX:

```
brew update && brew install phantomjs
```

See [PhantomJS download page](http://phantomjs.org/download.html) for other platforms

## Installation

```
npm install xslty -g
```

## Usage

```
xslty source.xml style.xsl
```
The order of parameters is important. The source XML has to always go first, followed by the XSLT transformation file. Any result of the transformation will come out to STDOUT, while errors will come out to SDTERR, as expected.

## License

Mozilla Public License 2.0
