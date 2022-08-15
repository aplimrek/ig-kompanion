import {Actions} from './AuthActions';
import {AuthAction, AuthState} from './AuthTypes';

const AuthReducer = (prevState: AuthState, action: AuthAction) => {
  switch (action.type) {
    case Actions.Login:
      return {
        ...prevState,
        isLoggedIn: true,
        isLoading: false,
      };
    case Actions.Logout:
      return {
        ...prevState,
        isLoggedIn: false,
      };
    case Actions.Restore:
      return {
        ...prevState,
        isLoading: false,
      };
  }
};

export {AuthReducer};
