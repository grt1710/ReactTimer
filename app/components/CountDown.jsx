var React = require('react');
var CountdownForm = require('CountdownForm');
var Clock = require('Clock');
var Controls = require('Controls');


var CountDown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },
  handleCountdown: function(countdown){
    this.setState({
      count: countdown,
      countdownStatus: 'started'
    })
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function () {
    var {count, countdownStatus} = this.state;

    var renderControlsArea = () => {
      if (countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <CountdownForm onSetCountdown={this.handleCountdown} />
      }
    };

    return (
      <div>
        <h2 className="page-title">Countdown App</h2>
        <Clock totalSeconds={count}/>
        {renderControlsArea()}
      </div>
    );
  }
});

module.exports = CountDown;
