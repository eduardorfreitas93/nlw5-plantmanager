import { TodosTypes, Todos } from './types';

export const addTodo = (data: Todos) => ({
  type: TodosTypes.ADD,
  payload: { data },
});

export const removeTodo = (id: number) => ({
  type: TodosTypes.REMOVE,
  payload: { id },
});
