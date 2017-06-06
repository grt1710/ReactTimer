var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
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
    var {totalSeconds} = this.props;

    return (
      <div>
        <div className="clock">
          <span className="clock-text">
            {this.formatSeconds(totalSeconds)}
          </span>
        </div>
      </div>
    );
  }
});

module.exports = Clock;
