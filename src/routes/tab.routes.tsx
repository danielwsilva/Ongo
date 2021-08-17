import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Terminals from '../pages/Terminals';
import Register from '../pages/Register';

import colors from '../styles/colors';

const AppTab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      keyboardHidesTabBar: true,
      style: {
        paddingVertical: 10,
        height: 80,
        paddingBottom: 20
      }
    }}
  >
    <AppTab.Screen 
      name="Lista"
      component={Terminals}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons
            name="list"
            size={size}
            color={color}
          />
        ))
      }}
    />

    <AppTab.Screen 
      name="Cadastrar"
      component={Register}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons
            name="add-circle-outline"
            size={size}
            color={color}
          />
        ))
      }}
    />
  </AppTab.Navigator>
);

export default AppRoutes;