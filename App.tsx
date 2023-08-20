// Testing with Jest and React Test Renderer.
// Wee are humans, and humans make mistakes Testing is important because it helps you uncover these mistakes and verifies that your code is working.
// Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies nof your project.
// There is more value in testing then you might realize.
// One of the best ways to fix a bug in your code is to write a falling test that exposes. Then when you fix the bug and re-run the test, if it passes it mens the bug is fixed, never reintroduced into the code base.
// Test can also serve as documentation for new people joining your team. For people who have never seen a codebase before reading tests can help them understand how the exiting code works.
// In this session, we want to do some testing using Jest.
// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/tutorial-react-native

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
import Camera from './src/screens/Camera';
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
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
