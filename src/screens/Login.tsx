import {StyleSheet, View} from 'react-native';
import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
