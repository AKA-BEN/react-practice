import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './pages/Demo';
import TodoList from './pages/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleFormsChange = (formData) => {
    this.setState({formData: formData})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;