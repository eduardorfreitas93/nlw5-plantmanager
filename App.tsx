import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';

/* eslint-disable camelcase */
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import store from './src/store';
import Routes from './src/routes';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
