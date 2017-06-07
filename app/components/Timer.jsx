var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus != prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        case 'cleared':
          this.setState({
            count: 0,
            timerStatus: 'stopped'
          });
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval( () => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount,
        timerStatus: 'started'
      });
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  render: function () {

    var {count, timerStatus} = this.state;

    return (
      <div>
        <h2 className="page-title">Timer App</h2>
        <Clock totalSeconds={count}/>
        <TimerControls timerStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
