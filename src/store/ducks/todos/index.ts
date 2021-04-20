import { Reducer } from 'redux';

import { TodosState, TodosTypes } from './types';

const INITIAL_STATE: TodosState = {
  dataTodos: [],
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.ADD:
      return { ...state, dataTodos: [...state.dataTodos, action.payload.data] };
    case TodosTypes.REMOVE:
      return {
        ...state,
        dataTodos: state.dataTodos.filter(
          item => item.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default reducer;
