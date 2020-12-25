import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from '@/components/Counter';
import Todos from '@/components/Todos';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const root = document.getElementById('root');
ReactDOM.render((
  <Provider store={store}>
    <Router>
      <>
        <ul>
          <li><Link to="/counter/counterName">counter</Link></li>
          <li><Link to={{pathname: '/todos', state: {name: 'todoName'}}}>todos</Link></li>
        </ul>
        <Route path="/counter/:name" component={Counter}/>
        <Route path="/todos" component={Todos} />
      </>
    </Router>
  </Provider>
), root);
