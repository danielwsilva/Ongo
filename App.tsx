import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import FlashMessage from "react-native-flash-message";

import {AuthProvider} from './src/contexts/auth';
import {TerminalProvider} from './src/contexts/terminal';
import Routes from './src/routes';

import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';

const App: React.FC = () => {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <NavigationContainer>  
      <AuthProvider>
        <TerminalProvider>
          <Routes />
        </TerminalProvider>
      </AuthProvider>  
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
}

export default App;