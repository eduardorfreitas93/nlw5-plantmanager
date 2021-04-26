import { UserTypes, User } from './types';

export const setName = (data: User) => ({
  type: UserTypes.SET_NAME,
  payload: { data },
});
