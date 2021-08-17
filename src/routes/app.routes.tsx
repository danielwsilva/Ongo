import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes';

import Details from '../pages/Details';
import Register from '../pages/Register';
import Maps from '../pages/Maps';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator  headerMode="none">
    <AppStack.Screen name="Terminals" component={TabRoutes}/>
    <AppStack.Screen name="Register" component={TabRoutes}/>
    <AppStack.Screen name="Details" component={Details}/>
    <AppStack.Screen name="Registers" component={Register}/>
    <AppStack.Screen name="Maps" component={Maps}/>
  </AppStack.Navigator>
);

export default AppRoutes;