var jsdom = require('jsdom');
//basic fake dom for react rendering
var jsDomReact = function(){
var markup = '<html><body></body></html>';
  global.document = jsdom.jsdom(markup);
  global.window = document.defaultView;
  global.navigator = { userAgent: 'node.js' };
}
jsDomReact();

require('./bundle.js');
