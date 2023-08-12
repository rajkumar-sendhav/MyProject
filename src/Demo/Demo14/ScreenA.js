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
    fontWeight: 'bold',
    margin: 10,
  },
});

export default ScreenA;
