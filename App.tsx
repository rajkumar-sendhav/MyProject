// AsyncStorage - How to Make an offline Login with Async Storage
// Async Storage: Unencrypted, Asynchronous, Persistent, key-value Storage System that is Global to the app. It should be used instead of Local Storage. Because AsyncStorage is Unencrypted, don't use it to store secret items such as passwords and tokens. One of the advantage of using AsyncStorage is that you can use it offline storage on the user's device, and when the user closes or restarts the app, this storage will not be erased and you can still use its values.

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from './src/Demo/Demo15/ScreenA';
import ScreenB from './src/Demo/Demo13/ScreenB';
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
