import React, {useMemo, useReducer} from 'react';
import {useKeychain} from '~hooks';
import {initialState, AuthContext, AuthReducer, Actions} from '~context/Auth';

const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const {createUser, removeUser, getUser} = useKeychain();
  const context = useMemo(
    () => ({
      restore: async () => {
        let credentials = await getUser();
        if (credentials) {
          dispatch({
            type: Actions.Login,
          });
        } else {
          dispatch({
            type: Actions.Restore,
          });
        }
      },
      login: async (username: string, password: string) => {
        // await createUser(username, password);
        await createUser(username, password);
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
    [getUser, createUser, removeUser],
  );
  return (
    <AuthContext.Provider value={{...context, state}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
