import counter, { CounterState } from '@/store/reducers/counter';
import todos, { TodosState } from '@/store/reducers/todos';
import { combineReducers } from 'redux';

const reducers = {
  counter,
  todos
};

type ReducersType = typeof reducers;

type CombinedState = {
  [key in keyof ReducersType]: ReturnType<ReducersType[key]>
}

export { CombinedState, CounterState, TodosState};

const combinedReducer = combineReducers(reducers);

export default combinedReducer;
