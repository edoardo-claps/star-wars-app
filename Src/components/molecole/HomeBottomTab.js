import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/home';
import Settings from '../Screens/settings';
import {useTranslation} from 'react-i18next';
import '../../languages/langConfig';

const Tab = createBottomTabNavigator();
const HomeTabBar = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#F9F871',
        tabBarInactiveTintColor: '#005248',
        tabBarActiveBackgroundColor: '#C0BC84',
        tabBarInactiveBackgroundColor: '#F6F2CB',
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 14},
        tabBarShowIcon: true,
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 25 : 20;
             color = focused ? '#F9F871' : '#555';
          } else if (route.name === t('settings')) {
            iconName = "home";
            size = focused ? 25 : 20;
             color = focused ? '#F9F871' : '#555';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabActiveTintColor="#f0edf6"
      tabBarInactiveTintColor="#3e2465"
      tabBarLabelStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen name="Home"  component={Home} />
      <Tab.Screen name={t('settings')} component={Settings} />
    </Tab.Navigator>
  );
};
export default HomeTabBar;

//graph-ql

//redux-saga
