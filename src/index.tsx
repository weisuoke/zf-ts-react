import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from '@/components/Counter';
import Todos from '@/components/Todos';

const root = document.getElementById('root');
ReactDOM.render((
  <>
    <Counter number={100}/>
    <Todos title="待办事项"/>
  </>
), root);
