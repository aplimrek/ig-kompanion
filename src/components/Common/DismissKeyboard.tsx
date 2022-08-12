import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {IS_IOS} from '../../config/Constants';

const DismissKeyboard = ({children}: {children: JSX.Element}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={IS_IOS ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
