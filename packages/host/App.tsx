/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Suspense } from 'react';

import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/components/SplashScreen';
import MainNavigator from './src/navigation/MainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';


function App(): React.JSX.Element {

  return (
    <Suspense fallback={<SplashScreen />}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
          <AuthProvider>
            <MainNavigator />
          </AuthProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Suspense>
  );
}

export default App;
