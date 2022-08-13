import * as Keychain from 'react-native-keychain';

// const OPTIONS: Keychain.Options = {
//   service: 'com.ig.kompanionapp.auth',
// };

const useKeychain = () => {
  const createUser = async (username: string, password: string) => {
    await Keychain.setGenericPassword(username, password);
  };

  const removeUser = async () => {
    await Keychain.resetGenericPassword();
  };

  const getUser = async (): Promise<false | Keychain.UserCredentials> => {
    return await Keychain.getGenericPassword();
  };

  return {createUser, removeUser, getUser};
};

export default useKeychain;
