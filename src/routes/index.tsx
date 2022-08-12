import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NAV_REF} from '../config/Constants';
import AppRouting from './App';
import OnboardingRouting from './Onboarding';
import AuthProvider from '../context/Auth/AuthProvider';
import {AuthContext} from '../context/Auth/AuthContext';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainRouting = () => {
  const {state} = useContext(AuthContext);
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      {state.isLoggedIn ? (
        <MainStack.Screen name="App" component={AppRouting} />
      ) : (
        <MainStack.Screen name="Onboarding" component={OnboardingRouting} />
      )}
    </MainStack.Navigator>
  );
};

const Root = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={NAV_REF}>
        <AuthProvider>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Main" component={MainRouting} />
          </RootStack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Root;
