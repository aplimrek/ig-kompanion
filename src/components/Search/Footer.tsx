import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <ActivityIndicator animating size="small" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    margin: 14,
  },
});
