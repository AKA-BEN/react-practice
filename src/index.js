import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Demo from './pages/Demo';
import TodoList from './pages/TodoList';

ReactDOM.render((
  <BrowserRouter>
    <App>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Demo'>Demo</Link></li>
          <li><Link to='/TodoList'>TodoList</Link></li>
        </ul>
        <Route path='/Demo' component={Demo}/>
        <Route path='/TodoList' component={TodoList}/>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
