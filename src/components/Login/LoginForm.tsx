import {Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {
  CustomInput,
  PaddingContainer,
  CustomButton,
  DismissKeyboard,
} from '../Common';
import {AuthContext} from '../../context/Auth/AuthContext';
const LOGO = require('../../assets/icons/logo.png');
const LoginForm = () => {
  const {login} = useContext(AuthContext);

  return (
    <DismissKeyboard>
      <PaddingContainer>
        <Image source={LOGO} style={styles.logo} />
        <CustomInput placeholder="Username" />
        <CustomInput placeholder="Password" />
        <CustomButton text="Login" style={styles.button} onPress={login} />
      </PaddingContainer>
    </DismissKeyboard>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  logo: {
    height: 36,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
