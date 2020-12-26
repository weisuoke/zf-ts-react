import {ADD, MINUS} from '@/store/action-types';
import { push, CallHistoryMethodAction } from 'connected-react-router';
import { LocationDescriptorObject, Path } from 'history';
import { TodosLocationState } from '@/components/Todos';

export interface AddAction {
  type: typeof ADD
}

export interface MinusAction {
  type: typeof MINUS
}

export function add(): AddAction {
  return {
    type: ADD
  };
}

export function minus(): MinusAction {
  return {
    type: MINUS
  };
}

export function go(path: LocationDescriptorObject<TodosLocationState>): CallHistoryMethodAction {
  return push(path);
}
