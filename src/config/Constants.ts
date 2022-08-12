import {Platform, Dimensions} from 'react-native';
import {createNavigationContainerRef} from '@react-navigation/native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const NAV_REF = createNavigationContainerRef();
export const IS_IOS = Platform.OS === 'ios';
