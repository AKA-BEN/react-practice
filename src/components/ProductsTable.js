import React, { Component } from 'react';
import ProductsRow from '../components/ProductsRow';

class ProductsTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let productFilter = {},
      rows = [],
      searchKey = this.props.searchKey.toLowerCase(),
      hideStocked = this.props.hideStocked;
    this.props.products.forEach(item => {
      if (item.name.toLowerCase().indexOf(searchKey) === -1) {
        return false;
      }
      if (!item.stocked && hideStocked) {
        return false;
      }
      if (!productFilter[item.category]) {
        productFilter[item.category] = [
          <tr key={item.category}><th colSpan="2">{item.category}</th></tr>
        ]
      }
      productFilter[item.category].push(
        <ProductsRow product={item} key={item.name} />
      )
    });
    Object.keys(productFilter).map((item) => {
      rows.push(productFilter[item]);
    })
    return (
      <table style={{width: '180px', margin: 'auto'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default ProductsTable;