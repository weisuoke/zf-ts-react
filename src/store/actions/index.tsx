import { AddAction, MinusAction } from '@/store/actions/counter';
import { AddTodoAction } from '@/store/actions/todos';

export type Action = AddAction | MinusAction | AddTodoAction
