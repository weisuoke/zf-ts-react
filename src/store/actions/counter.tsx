import {ADD, MINUS} from '@/store/action-types';

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
