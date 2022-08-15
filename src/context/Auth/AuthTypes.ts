import {Actions} from '~context/Auth';

type AuthState = {
  isLoggedIn: boolean;
  isLoading: boolean;
};
type AuthAction = {
  type: Actions;
};
type InitialAuthStateType = {
  isLoggedIn: Boolean;
  isLoading: Boolean;
};

export type {AuthAction, AuthState, InitialAuthStateType};
