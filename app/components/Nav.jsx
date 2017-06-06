var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeclassNameName='active' activeStyle={{fontWeight:'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeclassNameName='active' activeStyle={{fontWeight:'bold'}}>CountDown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">

      </div>
    </div>
  );
}

module.exports = Nav;
