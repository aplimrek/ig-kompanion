import {Image, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = (val: string) => setUsername(val);
  const updatePassword = (val: string) => setPassword(val);

  const handleLogin = () => login(username, password);

  return (
    <DismissKeyboard>
      <PaddingContainer>
        <Image source={LOGO} style={styles.logo} />
        <CustomInput
          placeholder="Username"
          value={username}
          onChangeText={updateUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={updatePassword}
          textContentType="password"
          secureTextEntry
        />
        <CustomButton
          text="Login"
          style={styles.button}
          onPress={handleLogin}
        />
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
