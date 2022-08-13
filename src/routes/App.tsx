import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SearchScreen} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ITabIcon} from '../@types/tab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../config';

const getTabBarIcon = ({route, props}: ITabIcon) => {
  let iconName = 'home';
  let {focused, color} = props;
  switch (route.name) {
    case 'Home':
      iconName = focused ? 'home' : 'home';
      break;
    case 'Search':
      iconName = focused ? 'search' : 'search';
      break;
    default:
      iconName = 'home';
      break;
  }

  // @ts-ignore
  return <Icon name={iconName} size={24} color={color} />;
};

const TabsRouting = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.DARK_PURPLE,
        tabBarInactiveTintColor: Colors.LIGHT_GRAY,
        tabBarShowLabel: false,
        tabBarIcon: props => getTabBarIcon({route, props}),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

const AppRouting = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabsRouting} />
    </Stack.Navigator>
  );
};

export default AppRouting;
