import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twoWayData: '双向数据',
      nickname: '',
      sex: '男',
      region: '中国大陆'
    }
  }
  handleInputChange = (e) => {
    let keyName = e.target.name,
      inputVal = e.target.value;
    this.setState({
      [keyName]: inputVal
    })
  }
  handleFormSubmit = (e) => {
    let formData =  this.props.formData;
    formData.push({
      nickname: this.state.nickname,
      sex: this.state.sex,
      region: this.state.region
    });
    this.props.onFormsChange(formData);
    this.setState({
      nickname: '',
      sex: '男',
      region: '中国大陆'
    });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <label>
          <input type="text" name="twoWayData" value={this.state.twoWayData} onChange={this.handleInputChange} />
          <br/>{this.state.twoWayData}
        </label>
        <h3>表单列表</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            姓名：<input type="text" name="nickname" value={this.state.nickname} onChange={this.handleInputChange} />
          </label>
          <br/>
          <label htmlFor="sex" onChange={this.handleInputChange}>
            性别：
            <input type="radio" name="sex" value="男" defaultChecked />男
            <input type="radio" name="sex" value="女" />女
          </label>
          <br/>
          <label>
            地区：
            <select name="region" value={this.state.region} onChange={this.handleInputChange}>
              <option value="中国大陆">中国大陆</option>
              <option value="港澳台">港澳台</option>
              <option value="中国以外">中国以外</option>
            </select>
          </label>
          <br/>
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
}

export default Forms;