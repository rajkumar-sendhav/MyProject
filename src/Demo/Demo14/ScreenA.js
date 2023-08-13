// Custom Fonts in React Native CLI
// https://fonts.google.com/
// STEP 1:
// Create a config file at the root of the project named "react-native.config.js"

// STEP 2:
// Add the following code inside.
//   module.exports = {
//     project: {
//       ios:{},
//       android:{}
//     },
//     assets:['./assets/fonts/'],
//   }
// STEP 3:
// Run the following command:
// npx react-native link       (React-native version < 0.69)
// npx react-native-asset      (React-native version > 0.69)

import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    // navigation.navigate('Profile');
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Toggle Drawer</Text>
      </Pressable>
    </View>
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
    margin: 10,
    fontFamily: 'DancingScript-Regular',
    // fontFamily: 'Pacifico-Regular',
    // fontFamily: 'Rajdhani-Regular',
  },
});

export default ScreenA;
