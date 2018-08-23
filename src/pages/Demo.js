import React, { Component } from 'react';
import Clock from '../components/Clock';
import Forms from '../components/Forms';
import List from '../components/List';
import Slots from '../components/Slots';

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      formData: []
    }
  }
  handleFormsChange = (formData) => {
    this.setState({formData: formData})
  }
  render() {
    let formData = this.state.formData;
    return (
      <div>
        <Clock label="当前时间" />
        <hr/>
        <Forms formData={formData} onFormsChange={this.handleFormsChange} />
        <List listData={formData} />
        <hr/>
        <Slots
          title={<h1>组件组合</h1>}
          content={<p>组件子元素组合其实就是组件插槽</p>}
          footerText="底部区域内容" />
      </div>
    );
  }
}

export default Demo;
