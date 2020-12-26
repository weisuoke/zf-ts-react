import { AddAction, MinusAction } from '@/store/actions/counter';
import { AddTodoAction } from '@/store/actions/todos';
import { CallHistoryMethodAction } from 'connected-react-router';

export type Action = AddAction | MinusAction | AddTodoAction | CallHistoryMethodAction
