import {StyleSheet, View} from 'react-native';
import React from 'react';
import {List} from '../components/Home';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <List />
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
