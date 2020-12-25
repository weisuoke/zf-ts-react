import { createStore } from 'redux';
import combinedReducer from '@/store/reducers';
const store = createStore(combinedReducer);
export default store;
