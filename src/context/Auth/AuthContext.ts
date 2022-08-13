import {createContext} from 'react';
import {InitialAuthStateType} from './AuthTypes';

export const initialState = {
  isLoading: true,
  isLoggedIn: false,
};

type AuthContextType = {
  state: InitialAuthStateType;
  restore: () => Promise<any>;
  login: (username: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
};

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  restore: async () => null,
  login: async () => null,
  logout: async () => null,
});
