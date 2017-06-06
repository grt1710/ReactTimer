var React = require('react');
var CountdownForm = require('CountdownForm');
var Clock = require('Clock');

var CountDown = React.createClass({
  getInitialState: function() {
    return {count: 0}
  },
  handleCountdown: function(countdown){
    this.setState({
      count: countdown
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
