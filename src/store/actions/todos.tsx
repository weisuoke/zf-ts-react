import {ADD_TODO} from '@/store/action-types';
import {Todo} from '@/models/todos';

export interface AddTodoAction {
  type: typeof ADD_TODO,
  payload: Todo,
}

export function addTodo(todo: Todo): AddTodoAction {
  return { type: ADD_TODO, payload: todo };
}
