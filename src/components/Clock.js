import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };
  }
  componentDidMount() {
    this.tick();
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }
  cancelTick = () => {
    if (this.state.isToggleOn) {
      clearInterval(this.timerID);
      this.setState({ isToggleOn: false })
    } else {
      this.tick();
      this.setState({ isToggleOn: true })
    }
  }
  render() {
    return (
      <h3>
        <span>
          {this.props.label}：{this.state.date.toLocaleTimeString()}
        </span>
        <button onClick={this.cancelTick}>
          {this.state.isToggleOn ? '取消更新' : '实时更新'}
        </button>
      </h3>
    )
  }
}

export default Clock;