import React, {useMemo, useReducer} from 'react';
import {Actions} from './AuthActions';
import {initialState, AuthContext} from './AuthContext';
import {AuthReducer} from './AuthReducer';

const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const context = useMemo(
    () => ({
      login: async () => {
        dispatch({
          type: Actions.Login,
        });
      },
      logout: async () => {
        dispatch({
          type: Actions.Logout,
        });
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={{...context, state}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
