import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import ProductsTable from '../components/ProductsTable';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "T-shirts", price: "$9.99", stocked: true, name: "vlone"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "T-shirts", price: "$29.99", stocked: false, name: "wassup"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
        {category: "T-shirts", price: "$49.99", stocked: true, name: "Aape"},
        {category: "T-shirts", price: "$99.99", stocked: true, name: "recheng"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "T-shirts", price: "$399.99", stocked: false, name: "champion"}
      ],
      searchKey: '',
      hideStocked: false
    }
  }
  onHandleSearchKeyChange = (v) => {
    this.setState({
      searchKey: v
    })
  }
  onHandleHideStockedChange = (v) => {
    this.setState({
      hideStocked: v
    })
  }
  render() {
    return (
      <div style={{marginTop: '30px'}}>
        <h1>可搜索的产品数据表格</h1>
        <Searchbar
          searchKey={this.state.searchKey}
          hideStocked={this.state.hideStocked}
          onHandleSearchKeyChange={this.onHandleSearchKeyChange}
          onHandleHideStockedChange={this.onHandleHideStockedChange} />
        <ProductsTable
          products={this.state.productsList}
          searchKey={this.state.searchKey}
          hideStocked={this.state.hideStocked} />
      </div>
    )
  }
}

export default TodoList;