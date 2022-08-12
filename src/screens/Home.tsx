import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/Auth/AuthContext';

const HomeScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text onPress={logout}>Log out</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
