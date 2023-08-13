// Demo 15
// Global Style & How to use Custom Fonts Globally in Project
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from './src/screens/ScreenA';
import ScreenB from './src/screens/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ScreenA"
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
