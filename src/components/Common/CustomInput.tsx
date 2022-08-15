import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {Colors} from '~config';
const CustomInput = (props: TextInputProps) => {
  return <TextInput {...props} style={[styles.textInput]} />;
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 0.3,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 3,
    fontSize: 12,
  },
});
