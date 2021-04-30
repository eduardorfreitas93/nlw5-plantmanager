import { Reducer } from 'redux';
import {
  EnvironmentsAction,
  EnvironmentsState,
  EnvironmentsTypes,
} from './types';

export const INITIAL_STATE: EnvironmentsState = {
  dataEnvironments: [],
};

const reducer: Reducer<EnvironmentsState, EnvironmentsAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case EnvironmentsTypes.ADD:
      return {
        ...state,
        dataEnvironments: [...state.dataEnvironments, ...action.payload.data],
      };
    default:
      return state;
  }
};

export default reducer;
