var React = require('react');

var Clock = React.createClass({
  formatSeconds: function (totalSeconds) {
    var Minutes = Math.floor(totalSeconds / 60);
    var Seconds = totalSeconds % 60;

    if (Seconds < 10) {
      Seconds = '0' + Seconds;
    }
    if (Minutes < 10) {
      Minutes = '0' + Minutes;
    }
    return Minutes + ':' + Seconds;
  },
  render: function () {
    return (
      <div>

      </div>
    );
  }
});

module.exports = Clock;
