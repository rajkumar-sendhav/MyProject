import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Practice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#00f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Header;
