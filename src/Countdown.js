import React, { Component } from 'react';
import './Countdown.css';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    const endDate = new Date("January 1, 2017").getTime(); 
    const currentDate = new Date().getTime(); 
    const seconds = (endDate - currentDate) / 1000; 
    this.state = { seconds };
  }


  componentDidMount() {
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

 
  render() {
    return (
      <div>
        <Title />
        <Hour seconds={this.state.seconds} />
        <Minute seconds={this.state.seconds} />
        <Second seconds={this.state.seconds} />
      </div>
    );
  }
}

class Title extends Component {
  render(){
    return (
      <div className="title">
        <h1>COUNTDOWN</h1>
      </div>
    );
  }
} 

class Second extends Component {
  render() {
    const roundedSeconds = Math.floor(this.props.seconds % 60);
    const addDigitSeconds = (roundedSeconds < 10) ? '0' + roundedSeconds : roundedSeconds;
    return (
      <div className="seconds">
        <p>{ addDigitSeconds }</p>
        <h2>SECONDS</h2>
      </div>
    );
  }
}

class Minute extends Component {
  render() {
    const minutes = Math.floor(this.props.seconds / 60 % 24);
    const addDigitMinutes = (minutes < 10) ? '0' + minutes : minutes;
    return (
      <div className="minutes">
        <p>{ addDigitMinutes } : </p>
        <h2>MINUTES</h2>
      </div>
    );
  }
}

class Hour extends Component {
  render() {
    const hours = Math.floor(this.props.seconds / 3600);
    const addDigitHours = (hours < 10) ? '0' + hours : hours;
    return (
      <div className="hours">
        <p>{ addDigitHours } :</p>
        <h2>HOURS</h2>
      </div>
    );
  }
}

