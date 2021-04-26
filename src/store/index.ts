import { applyMiddleware, compose, createStore, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { reactotron } from '../config/ReactotronConfig';

import rootReducer from './ducks/rootReducer';

import { TodosState } from './ducks/todos/types';
import { UserState } from './ducks/user/types';
import { PlantsState } from './ducks/plants/types';
import { EnvironmentsState } from './ducks/environments/types';

export interface ApplicationState {
  todos: TodosState;
  user: UserState;
  plants: PlantsState;
  environments: EnvironmentsState;
}

const middlewares = [applyMiddleware(thunk)];

if (__DEV__) {
  const reactotronMiddleware = reactotron.createEnhancer();

  middlewares.push(reactotronMiddleware);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['todos', 'plants', 'environments'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  compose(...middlewares),
);

const persistor = persistStore(store);

export { store, persistor };
