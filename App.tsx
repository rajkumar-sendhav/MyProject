/* eslint-disable react/no-unstable-nested-components */
// React Navigation v6 - Drawer Navigation - Side Menu
// https://reactnavigation.org/docs/drawer-navigator

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from './src/Demo/Demo13/ScreenA';
import ScreenB from './src/Demo/Demo13/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={ScreenA}
          options={{
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#007AFF' : '#999999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ScreenB}
          options={{
            title: 'ScreenB Title',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#007AFF' : '#999999'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
