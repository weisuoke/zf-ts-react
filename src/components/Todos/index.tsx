import * as React from 'react';
import TodoInput from '@/components/Todos/TodoInput';
import TodoItem from '@/components/Todos/TodoItem';
import { Todo } from '@/models';
import { CombinedState, TodosState } from '@/store/reducers';
import { RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';
import * as actions from '@/store/actions/todos';
import { connect } from 'react-redux';

const ulStyle:React.CSSProperties = {
  width: '100px'
};

type StateProps = ReturnType<typeof mapStateToProps>;

type DispatchProps = typeof actions;

export interface State {
  todos: Todo[]
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Params {}
export interface TodosLocationState { name:string }
type Props = StateProps & DispatchProps & RouteComponentProps<Params, StaticContext, TodosLocationState>;

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
        <p>名称:{this.props.location.state.name}</p>
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
