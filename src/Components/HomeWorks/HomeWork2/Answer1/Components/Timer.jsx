import React, { Component } from "react";
import styles from "./Timer.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: props.time,
      time: props.time,
      usedTime: 0,
      initialUsedTime: 0, // new state to store initial usedTime
      resetTimer: props.resetTimer,
      Key: props.Key,
      showResult: props.showResult,
    };
  }

  componentDidMount() {
    this.setState({ timeLeft: this.state.timeLeft });
    this.interval = setInterval(() => {
      const newTimeLeft = this.state.time - 1;
      if (newTimeLeft >= 0) {
        this.setState({
          time: newTimeLeft,
        });
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
    // calculate initial usedTime
    if (this.props.showResult) {
      const { timeLeft } = this.state;
      this.setState({ initialUsedTime: this.props.time - timeLeft });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.Key !== this.props.Key) {
      const usedTime = prevState.time - this.state.time; // use current time instead of previous timeLeft
      this.setState({
        timeLeft: this.props.time,
        time: this.props.time,
        Key: this.props.Key,
        usedTime: this.state.initialUsedTime + usedTime,
      });
    }
    if (prevProps.showResult !== this.props.showResult) {
      const usedTime =
        this.state.initialUsedTime + prevState.time - this.state.time; // calculate usedTime based on previous and current time
      this.setState({
        showResult: this.props.showResult,
        usedTime,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className={styles.timer}>خیلی دیر کردی</div>;
    } else {
      return (
        <div className={styles.timer}>
          <div className={styles.timerText}>زمان باقی مانده</div>
          <div className={styles.value}>{remainingTime}</div>
          <div className={styles.timerText}>ثانیه</div>
        </div>
      );
    }
  };
  renderFinish = ({ remainingTime }) => {
    return (
      <div className={styles.timer}>
        <div className={styles.timerText}>زمان مصرف شده</div>
        <div className={styles.value}>{remainingTime}</div>
        <div className={styles.timerText}>ثانیه</div>
      </div>
    );
  };

  render() {
    const { usedTime, timeLeft, Key, showResult } = this.state;
    console.log(usedTime);
    return showResult ? (
      <div className={styles.timerContainerResult}>
        <CountdownCircleTimer
          size={150}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          duration={usedTime}
        >
          {this.renderFinish.bind()}
        </CountdownCircleTimer>
      </div>
    ) : (
      <div className={styles.timerContainer}>
        <CountdownCircleTimer
          size={100}
          key={Key}
          isPlaying
          duration={timeLeft}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {this.renderTime.bind()}
        </CountdownCircleTimer>
      </div>
    );
  }
}

export default Timer;
