import {CommonActions} from '@react-navigation/native';
import {NAV_REF} from '../config/Constants';

const useRouting = () => {
  const navigate = (screen: never, params: never) => {
    if (NAV_REF.isReady()) {
      NAV_REF.navigate(screen, params);
    }
  };
  const goBack = () => {
    if (NAV_REF.isReady()) {
      NAV_REF.dispatch(CommonActions.goBack());
    }
  };

  return {navigate, goBack};
};

export default useRouting;
