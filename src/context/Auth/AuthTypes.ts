import {Actions} from './AuthActions';

type AuthState = {
  isLoggedIn: boolean;
};
type AuthAction = {
  type: Actions;
};
type InitialAuthStateType = {
  isLoggedIn: Boolean;
};

export type {AuthAction, AuthState, InitialAuthStateType};
