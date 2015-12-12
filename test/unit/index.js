import jsdom from 'jsdom'
import sinon from 'sinon'

global.document = jsdom.jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
global.window = global.document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};
global.sinon = sinon;
global.ENV = 'dev';

