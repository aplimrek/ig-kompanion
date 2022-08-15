import React, {useCallback, useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SearchScreen} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ITabIcon} from '../@types/tab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../config';
import useKeychain from '../hooks/useKeychain';
import {AuthContext} from '../context/Auth/AuthContext';

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
  const {getUser} = useKeychain();
  const {logout} = useContext(AuthContext);
  const [username, setUsername] = useState('');

  const loadUser = useCallback(async () => {
    const credentials = await getUser();
    if (credentials) {
      setUsername(credentials.username);
    }
  }, [getUser]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.DARK_PURPLE,
        tabBarInactiveTintColor: Colors.LIGHT_GRAY,
        tabBarShowLabel: false,
        tabBarIcon: props => getTabBarIcon({route, props}),
        headerTitleAlign: 'left',
        headerTintColor: Colors.DARK_PURPLE,
        headerRight: () => (
          <Icon
            name="sign-out"
            size={24}
            color={Colors.DARK_PURPLE}
            style={{marginRight: 10}}
            onPress={() => {
              logout();
            }}
          />
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: `Hey, ${username}`}}
      />
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
