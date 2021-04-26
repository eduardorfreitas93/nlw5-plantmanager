import { Dispatch } from 'redux';

import { PlantsTypes, IPlant } from './types';

import api from '../../../services/api';

export const addPlantsSuccess = (data: IPlant[]) => ({
  type: PlantsTypes.ADD,
  payload: { data },
});

export const setFilteredPlants = (data: IPlant[]) => ({
  type: PlantsTypes.SET_FILTERED,
  payload: { data },
});

export const addPlants = (page: number) => {
  return async (dispatch: Dispatch) => {
    const { data } = await api.get(
      `/plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );

    if (!data.length) {
      return;
    }

    dispatch(addPlantsSuccess(data));
  };
};
