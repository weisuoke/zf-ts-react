import {
  createStore,
  applyMiddleware,
  Action,
  Store,
  AnyAction,
  StoreEnhancer,
  StoreEnhancerStoreCreator
} from 'redux';
import combinedReducer, { CombinedState } from '@/store/reducers';
import { routerMiddleware } from 'connected-react-router';
import history from '@/history';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

interface Ext {
  dispatch: ThunkDispatch<CombinedState, undefined, AnyAction>
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StateExt { }

const storeEnhancer: StoreEnhancer = applyMiddleware(routerMiddleware(history), thunk);
const storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore);
const store: Store<CombinedState & StateExt, AnyAction> & Ext = storeEnhancerStoreCreator(combinedReducer);
const thunkAction: ThunkAction<void, CombinedState, undefined, AnyAction> = (
  dispatch: ThunkDispatch<CombinedState, undefined, AnyAction>,
  getState: () => CombinedState
  // eslint-disable-next-line @typescript-eslint/no-empty-function
): void => { };

store.dispatch(thunkAction);

export default store;
