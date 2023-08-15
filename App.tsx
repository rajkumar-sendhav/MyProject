// Redux - State Management.
// Redux is a predictable state container for JavaScript apps.
// As the application grows, it becomes difficult to keep it organized and maintain data flow.
// Redux Solves this problem by managing application's state with a single global object called Store.
// Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier.
// The Redux architecture is based on the following components:
// Actions: Actions are a plain JavaScript object that contains information. Actions are the only source of information for the state and have a type field that tells what kind of action to perform.
// Reducers: Actions only tell what  to do, but they don't tell how to do, so reducers are the pure functions that take the current state and action and return the new state and tell the store how to do.
// Store: The store is the object which holds the state of the application.
// npm install redux
// npm install react-redux
// npm install redux-thunk (module as a middleware for Redox).

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
