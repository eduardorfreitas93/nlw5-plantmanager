export enum EnvironmentsTypes {
  ADD = 'environments/ADD',
}

export interface IEnvironments {
  key: string;
  title: string;
}

export interface EnvironmentsState {
  readonly dataEnvironments: IEnvironments[];
}

export interface EnvironmentsAction {
  type: string;
  payload: { data: IEnvironments[] };
}
