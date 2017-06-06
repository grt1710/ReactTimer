var React = require('react');
var ReactDOM = require('react-dom');
var {IndexRoute, Route, Router, hashHistory, HashRouter} = require('react-router');
var Main = require('Main');
var CountDown = require('CountDown');
var Timer = require('Timer');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load css
require('style!css!sass!customStyles');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="countdown" component={CountDown} />
        <IndexRoute component={Timer} />
      </Route>
    </Router>,
    document.getElementById('app')
);
