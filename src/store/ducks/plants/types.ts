export enum PlantsTypes {
  ADD = 'plant/ADD',
  SET_FILTERED = 'plant/SET_FILTERED',
}

/* eslint-disable camelcase */
export interface IPlant {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export interface PlantsState {
  readonly dataPlants: IPlant[];
  readonly dataFilteredPlants: IPlant[];
}

export interface PlantsAction {
  type: string;
  payload: { data: IPlant[] };
}
