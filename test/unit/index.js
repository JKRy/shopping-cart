import jsdom from 'jsdom'
import mocha from 'mocha'
import chai from 'chai'
import sinon from 'sinon'
import Backbone from 'backbone'
import _ from 'underscore'

// set up a window object for libraries that need it
global.document = jsdom.jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
global.window = global.document.defaultView;

var $ = require('jquery')(global.window);
Backbone.$ = $;

global.navigator = {
    userAgent: 'node.js'
};

global.ENV = 'dev';

// handlebars template compiling
var Handlebars = require('handlebars');
var fs = require('fs');

require.extensions['.hbs'] = function (module, filename) {
    var compiled;
    var raw = fs.readFileSync(filename, 'utf8');
    compiled = Handlebars.compile(raw);
    module.exports = compiled;
};
