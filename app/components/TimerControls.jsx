var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {timerStatus} = this.props;
    var renderStartStopBtns = () => {
      if (timerStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('stopped')}>Stop</button>
      } else if (timerStatus === 'stopped') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopBtns()}
        <button className="button alert hollow" onClick={this.onStatusChange('cleared')}>Clear</button>
      </div>
    )
  }
});

module.exports = TimerControls;