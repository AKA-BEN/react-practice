import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
  }
  handleSearchKeyChange = (e) => {
    this.props.onHandleSearchKeyChange(e.target.value)
  }
  handleHideStockedChange = (e) => {
    this.props.onHandleHideStockedChange(e.target.checked)
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.searchKey}
          onChange={this.handleSearchKeyChange}
          placeholder="Search..." />
        <p>
          <label>
            <input
              type="checkbox"
              onChange={this.handleHideStockedChange}
              checked={this.props.hideStocked} />
            {' '}仅显示有库存的商品
          </label>
        </p>
      </form>
    )
  }
}

export default Searchbar;