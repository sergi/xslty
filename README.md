# XSLTy

Xslty is a simple command-line utility that transforms XML using [XSLT 2.0](http://www.w3.org/TR/xslt20/) and outputs it to `stdout`. I made it to scratch my own itch, so it might not suit your needs, but it probably will.

## Requirements

XSLTy requires [PhantomJS](http://phantomjs.org/) to be installed. This is because XSLTy uses Saxon CE to parse XSLT 2.0, and that's a browser library.

## Usage

```
phantomjs xslty.js source.xml style.xsl
```
The order of parameters is important. The source XML has to always go first, followed by the XSLT transformation file.

## License

Mozilla Public License 2.0