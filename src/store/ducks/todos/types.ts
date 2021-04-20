/**
 * Action types
 */
export enum TodosTypes {
  ADD = 'todos/ADD',
  REMOVE = 'todos/REMOVE',
}

/**
 * Data types
 */
export interface Todos {
  id: number;
  name: string;
}

/**
 * Data state
 */
export interface TodosState {
  readonly dataTodos: Todos[];
}
