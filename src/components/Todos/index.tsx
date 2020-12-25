import * as React from 'react';
import TodoInput from '@/components/Todos/TodoInput';
import TodoItem from '@/components/Todos/TodoItem';
import { Todo } from '@/models';
import { CombinedState, TodosState } from '@/store/reducers';
import * as actions from '@/store/actions/todos';
import { connect } from 'react-redux';

const ulStyle:React.CSSProperties = {
  width: '100px'
};

type StateProps = ReturnType<typeof mapStateToProps>;

type DispatchProps = typeof actions;

type Props = StateProps & DispatchProps;

export interface State {
  todos: Todo[]
}

class Todos extends React.Component<Props, State> {
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

const mapStateToProps = function (state: CombinedState): TodosState {
  return state.todos;
};

export default connect(mapStateToProps, actions)(Todos);
