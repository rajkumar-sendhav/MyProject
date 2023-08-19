// Google Maps.
// https://github.com/react-native-maps/react-native-maps
// https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md
// https://developers.google.com/maps/documentation/android-sdk/get-api-key
// https://console.cloud.google.com/apis/credentials?project=powerful-host-396409
// https://console.cloud.google.com/apis/library/maps-android-backend.googleapis.com?project=powerful-host-396409

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
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
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
