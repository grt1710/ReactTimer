var React = require('react');
var Link = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">React Timer App</li>
          <li>
            <span activeclassNameName='active' activeStyle={{fontWeight:'bold'}}>Timer</span>
          </li>
          <li>
            <span activeclassNameName='active' activeStyle={{fontWeight:'bold'}}>CountDown</span>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">

      </div>
    </div>
  );
}

module.exports = Nav;
