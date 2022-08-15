import * as Keychain from 'react-native-keychain';
import {KEYCHAIN_OPTIONS} from '~config';

// const OPTIONS: Keychain.Options = {
//   service: 'com.ig.kompanionapp.auth',
// };

const useKeychain = () => {
  const createUser = async (username: string, password: string) => {
    await Keychain.setGenericPassword(username, password, KEYCHAIN_OPTIONS);
  };

  const removeUser = async () => {
    await Keychain.resetGenericPassword(KEYCHAIN_OPTIONS);
  };

  const getUser = async (): Promise<false | Keychain.UserCredentials> => {
    return await Keychain.getGenericPassword(KEYCHAIN_OPTIONS);
  };

  return {createUser, removeUser, getUser};
};

export default useKeychain;
