import { Dispatch } from 'redux';

import { EnvironmentsTypes, IEnvironments } from './types';

import api from '../../../services/api';

export const addEnvironmentsSuccess = (data: IEnvironments[]) => ({
  type: EnvironmentsTypes.ADD,
  payload: { data },
});

export const addEnvironments = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await api.get(
      '/plants_environments?_sort=title&_order=asc',
    );

    dispatch(
      addEnvironmentsSuccess([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]),
    );
  };
};
