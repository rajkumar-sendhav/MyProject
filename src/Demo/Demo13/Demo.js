// React Navigation v6 - Tab Navigator, Material Tab at Bottom & Top
// https://reactnavigation.org/docs/tab-based-navigation/
// https://github.com/oblador/react-native-vector-icons
// https://reactnavigation.org/docs/material-bottom-tab-navigator
// https://reactnavigation.org/docs/material-top-tab-navigator

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenA from './src/Demo/Demo13/ScreenA';
import ScreenB from './src/Demo/Demo13/ScreenB';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Profile') {
              iconName = 'user';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#f0f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: {fontSize: 14},
          showIcons: true,
        }}
        // activeColor='#f0edf6'
        inactiveColor="#3e2465"
        // eslint-disable-next-line react-native/no-inline-styles
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen
          name="Home"
          component={ScreenA}
          // options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="Profile" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
