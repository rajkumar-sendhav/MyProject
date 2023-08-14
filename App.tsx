// AsyncStorage - How to Make an offline Login with Async Storage
// Async Storage: Unencrypted, Asynchronous, Persistent, key-value Storage System that is Global to the app. It should be used instead of Local Storage. Because AsyncStorage is Unencrypted, don't use it to store secret items such as passwords and tokens. One of the advantage of using AsyncStorage is that you can use it offline storage on the user's device, and when the user closes or restarts the app, this storage will not be erased and you can still use its values.
// npm install @react-native-async-storage/async-storage

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
