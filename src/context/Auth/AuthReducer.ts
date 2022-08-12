import {Actions} from './AuthActions';
import {AuthAction, AuthState} from './AuthTypes';

const AuthReducer = (prevState: AuthState, action: AuthAction) => {
  switch (action.type) {
    case Actions.Login:
      return {
        ...prevState,
        isLoggedIn: true,
      };
    case Actions.Logout:
      return {
        ...prevState,
        isLoggedIn: false,
      };
  }
};

export {AuthReducer};
