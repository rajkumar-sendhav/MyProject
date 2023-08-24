// To-Do List App.
// https://github.com/react-native-checkbox/react-native-checkbox
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ToDo from './src/screens/ToDo';
import Done from './src/screens/Done';
import Task from './src/screens/Task';
import Splash from './src/screens/Splash';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'To-Do') {
            iconName = 'clipboard-list';
            size = focused ? 25 : 20;
          } else if (route.name === 'Done') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0080ff',
        inactiveTintColor: '#777777',
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name={'To-Do'}
        component={ToDo}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Done'}
        component={Done}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
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
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen name="My Tasks" component={HomeTabs} />
          <RootStack.Screen name="Task" component={Task} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
