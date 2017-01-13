// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke  = require('bespoke');
var classes  = require('bespoke-classes');
var keys     = require('bespoke-keys');
var touch    = require('bespoke-touch');
var backdrop = require('bespoke-backdrop');
var scale    = require('bespoke-scale');
var hash     = require('bespoke-hash');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  backdrop(),
  scale(),
  hash()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

