import {Platform, Dimensions} from 'react-native';
import {createNavigationContainerRef} from '@react-navigation/native';

export const BASE_URL_DEV =
  'https://62f952f6e05644803535875c.mockapi.io/api/v1/';
export const BASE_URL_PROD =
  'https://62f952f6e05644803535875c.mockapi.io/api/v1/';
export const BASE_URL = BASE_URL_PROD;
export const IS_DEVELOPMENT = BASE_URL === BASE_URL_DEV;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const NAV_REF = createNavigationContainerRef();
export const IS_IOS = Platform.OS === 'ios';
export const KEYCHAIN_OPTIONS = {
  service: 'com.ig.kompanion.auth',
};
