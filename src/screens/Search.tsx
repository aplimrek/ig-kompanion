import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Grid} from '../components/Search';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Grid />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
