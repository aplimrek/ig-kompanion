import {createContext} from 'react';
import {InitialAuthStateType} from './AuthTypes';

export const initialState = {
  isLoggedIn: false,
};

type AuthContextType = {
  state: InitialAuthStateType;
  login: () => any;
  logout: () => any;
};

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  login: () => null,
  logout: () => null,
});
