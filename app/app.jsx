var React = require('react');
var ReactDOM = require('react-dom');
var {Route, HashRouter} = require('react-router-dom');
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load css
require('style!css!sass!customStyles');

ReactDOM.render(
    <HashRouter>
      <Route path="/" component={Main}>

      </Route>
    </HashRouter>,
    document.getElementById('app')
);
