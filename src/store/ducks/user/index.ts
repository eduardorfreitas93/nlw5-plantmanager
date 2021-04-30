import { Reducer } from 'redux';

import { UserState, UserTypes } from './types';

export const INITIAL_STATE: UserState = {
  dataUser: {
    name: '',
  },
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_NAME:
      return { ...state, dataUser: action.payload.data };
    default:
      return state;
  }
};

export default reducer;
