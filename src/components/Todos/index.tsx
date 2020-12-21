import * as React from 'react';
import TodoInput from '@/components/Todos/TodoInput';
import TodoItem from '@/components/Todos/TodoItem';
import { Todo } from './types';

const ulStyle:React.CSSProperties = {
  width: '100px'
};

export interface Props {
  title: string
}

export interface State {
  todos: Todo[]
}

export default class Todos extends React.Component<Props, State> {
  state = {
    todos: new Array<Todo>()
  }

  addTodo = (todo: Todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <TodoInput addTodo={this.addTodo}/>
        <ul style={ulStyle}>
          {
            this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
          }
        </ul>
      </div>
    );
  }
}
