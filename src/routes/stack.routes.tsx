import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Welcome from '../pages/Welcome';
import Confirmation from '../pages/Confirmation';
import UserIndentification from '../pages/UserIndentification';
import PlantSelect from '../pages/PlantSelect';

import colors from '../styles/colors';
import { ApplicationState } from '../store';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  const userName = useSelector(
    (state: ApplicationState) => state.user.dataUser.name,
  );

  return (
    <stackRoutes.Navigator
      headerMode="none"
      initialRouteName={userName && 'PlantSelect'}
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <stackRoutes.Screen name="Welcome" component={Welcome} />

      <stackRoutes.Screen
        name="UserIndentification"
        component={UserIndentification}
      />

      <stackRoutes.Screen name="Confirmation" component={Confirmation} />

      <stackRoutes.Screen name="PlantSelect" component={PlantSelect} />
    </stackRoutes.Navigator>
  );
};

export default AppRoutes;
