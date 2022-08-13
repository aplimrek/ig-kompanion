import {createContext} from 'react';
import {InitialAuthStateType} from './AuthTypes';

export const initialState = {
  isLoggedIn: false,
};

type AuthContextType = {
  state: InitialAuthStateType;
  login: (username: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
};

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  login: async () => null,
  logout: async () => null,
});
