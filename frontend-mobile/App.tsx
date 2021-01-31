import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import * as Updates from 'expo-updates';
//import { toastError } from './src/utils/customToast';
import { navigationRef } from './src/utils/RootNavigation';

export default function App() {

  const checkUpdates = async () => {

    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    catch (error) {
      //toastError('Erro ao buscar atualizações!')
    }
  }

  useEffect(() => {
    checkUpdates();
  }, []);


  return (
    <NavigationContainer 
      ref={navigationRef}
    >
      <Routes />
    </NavigationContainer>
  );
}
