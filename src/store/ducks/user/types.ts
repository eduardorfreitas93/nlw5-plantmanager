/**
 * Action types
 */
export enum UserTypes {
  SET_NAME = 'user/SET_NAME',
}

/**
 * Data types
 */
export interface User {
  name: string;
}

/**
 * Data state
 */
export interface UserState {
  readonly dataUser: User;
}
