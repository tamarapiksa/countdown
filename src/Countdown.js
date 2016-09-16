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
    return (
      <div className="seconds">
        <p>{ roundedSeconds }</p>
        <h2>SECONDS</h2>
      </div>
    );
  }
}

class Minute extends Component {
  render() {
    const minutes = Math.floor(this.props.seconds / 60 % 24)
    return (
      <div className="minutes">
        <p>{ minutes } : </p>
        <h2>MINUTES</h2>
      </div>
    );
  }
}

class Hour extends Component {
  render() {
    const hours = Math.floor(this.props.seconds / 3600)
    return (
      <div className="hours">
        <p>{hours} :</p>
        <h2>HOURS</h2>
      </div>
    );
  }
}

