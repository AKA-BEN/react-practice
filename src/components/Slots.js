import React, { Component } from 'react';

class Slots extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.content}
        <div>{this.props.footerText}</div>
      </div>
    )
  }
}

export default Slots;