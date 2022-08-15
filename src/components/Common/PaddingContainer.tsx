import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '~config';
const PaddingContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <View style={styles.container}>{children}</View>;
};

export default PaddingContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: SCREEN_WIDTH,
  },
});
