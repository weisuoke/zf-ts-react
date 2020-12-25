import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from '@/components/Counter';
import Todos from '@/components/Todos';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');
ReactDOM.render((
  <Provider store={store}>
    <>
      <Counter />
      <Todos />
    </>
  </Provider>
), root);
