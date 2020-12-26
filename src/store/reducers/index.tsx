import counter, { CounterState } from '@/store/reducers/counter';
import todos, { TodosState } from '@/store/reducers/todos';
import { combineReducers } from 'redux';
import history from '@/history';
import { connectRouter } from 'connected-react-router';

const reducers = {
  counter,
  todos,
  router: connectRouter(history)
};

type ReducersType = typeof reducers;

type CombinedState = {
  [key in keyof ReducersType]: ReturnType<ReducersType[key]>
}

export { CombinedState, CounterState, TodosState};

const combinedReducer = combineReducers(reducers);

export default combinedReducer;
