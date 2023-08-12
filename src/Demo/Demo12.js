// React Navigation v6 - Stack Navigator
// https://reactnavigation.org/docs/getting-started
// NavigationContainer useful functionality: The NavigationContainer for managing our app state and linking our top-level navigator to the app environment. The Container takes care of platform specific integration and provides various useful functionality.
// Deep linking: Deep link integration with the linking prop.
// Notify state changes: Notify state changes for screen tracking and state persistence.
// State persistence: State persistence with the persistence prop.
// Handle system back button: Handle system back button on Android by using the BackHandler API from React Native.
import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Profile</Text>
      </Pressable>
    </View>
  );
};
const ScreenB = ({navigation}) => {
  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go Back</Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={ScreenA}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
