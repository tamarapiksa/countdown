import React, { Component } from 'react';
import './Countdown.css';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: {
        const endDate = new Date("January 1, 2017").getTime(); 
        const currentDate = new Date().getTime();
        return currentDate - endDate;
      }
    };
  }

  startTimer() {
    const timer = setInterval(() => {
      const seconds = this.state.seconds;
      if (seconds <= 0) {
        alert("Happy New Year!")
        clearInterval(timer);
      } else {
        this.setState({ seconds:  seconds - 1 });
      }
    }, 1000)
  } 


  handleClick() {
    this.startTimer();
  }
  render() {
    return (
      <div>
        <Hour seconds={this.state.seconds}/>
        <Minute seconds={this.state.seconds}/>
        <Second seconds={this.state.seconds}/>
        <button onClick={ this.handleClick.bind(this) }>Start Countdown!</button>
      </div>
    );
  }
}

class Second extends Component {
  render() {
    const roundedSeconds = this.props.seconds % 60;
    return (
      <div className="seconds">
        <p>{ roundedSeconds } seconds</p>
      </div>
    );
  }
}

class Minute extends Component {
  render() {
    const minutes = Math.floor(this.props.seconds / 60)
    return (
      <div className="minutes">
        <p>{ minutes } minutes</p>
      </div>
    );
  }
}

class Hour extends Component {
  render() {
    const hours = Math.floor(this.props.seconds / 3600)
    return (
      <div className="hours">
        <p>{hours} hours</p>
      </div>
    );
  }
}

