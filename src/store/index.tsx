import {applyMiddleware, createStore} from 'redux';
import combinedReducer from '@/store/reducers';
import { routerMiddleware } from 'connected-react-router';
import history from '@/history';

const store = applyMiddleware(routerMiddleware(history))(createStore)(combinedReducer);

export default store;
