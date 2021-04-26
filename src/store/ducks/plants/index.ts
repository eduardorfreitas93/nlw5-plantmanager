import { Reducer } from 'redux';

import { PlantsState, PlantsTypes, PlantsAction } from './types';

const INITIAL_STATE: PlantsState = {
  dataPlants: [],
  dataFilteredPlants: [],
};

const reducer: Reducer<PlantsState, PlantsAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case PlantsTypes.ADD:
      return {
        ...state,
        dataPlants: [...state.dataPlants, ...action.payload.data],
        dataFilteredPlants: [
          ...state.dataFilteredPlants,
          ...action.payload.data,
        ],
      };
    case PlantsTypes.SET_FILTERED:
      return {
        ...state,
        dataFilteredPlants: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
