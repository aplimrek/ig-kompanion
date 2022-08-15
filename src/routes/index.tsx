import React, {useCallback, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NAV_REF} from '~config';
import AppRouting from '~routes/App';
import OnboardingRouting from '~routes/Onboarding';
import {AuthContext, AuthProvider} from '~context/Auth';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainRouting = () => {
  const {state, restore} = useContext(AuthContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const restoreUser = useCallback(() => restore(), []);
  useEffect(() => {
    restoreUser();
  }, [restoreUser]);
  if (state.isLoading) {
    return null;
  }
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
