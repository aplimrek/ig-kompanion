import React, {useMemo, useReducer} from 'react';
import useKeychain from '../../hooks/useKeychain';
import {Actions} from './AuthActions';
import {initialState, AuthContext} from './AuthContext';
import {AuthReducer} from './AuthReducer';

const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const {createUser, removeUser} = useKeychain();
  const context = useMemo(
    () => ({
      login: async (username: string, password: string) => {
        // await createUser(username, password);
        await createUser('alp', 'imrek');
        dispatch({
          type: Actions.Login,
        });
      },
      logout: async () => {
        await removeUser();
        dispatch({
          type: Actions.Logout,
        });
      },
    }),
    [createUser, removeUser],
  );
  return (
    <AuthContext.Provider value={{...context, state}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
