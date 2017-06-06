var React = require('react');
var CountdownForm = require('CountdownForm');
var Clock = require('Clock');

var CountDown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleCountdown: function(countdown){
    this.setState({
      count: countdown,
      countdownStatus: 'started'
    })
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleCountdown} />
      </div>
    );
  }
});

module.exports = CountDown;
