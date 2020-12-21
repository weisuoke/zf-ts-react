import * as React from 'react';
import { Todo } from './types';

const todoItemStyle: React.CSSProperties = {
  color: 'red',
  backgroundColor: 'green'
};

interface Props {
  todo: Todo
}

const TodoItem: React.FC<Props> = ((props: Props) => {
  return (
    <li style={todoItemStyle}>{props.todo.text}</li>
  );
});

export default TodoItem;
