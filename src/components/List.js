import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.listData.map((item, index) =>
            <li key={index}>{item.nickname} - {item.sex} - {item.region}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default List;