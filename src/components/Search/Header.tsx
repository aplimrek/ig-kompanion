import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '~config';

const Header = () => {
  return (
    <View style={styles.header}>
      <TextInput style={styles.searchbar} placeholder="Search something..." />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
    padding: 6,
  },
  searchbar: {
    backgroundColor: Colors.BG_GRAY,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 12,
    fontWeight: '600',
    borderRadius: 20,
  },
});
