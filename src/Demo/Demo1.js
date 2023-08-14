// Structure & Basic Components in our First App

import React from 'react';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>App</Text>
      <Button
        title="YouTube Channel"
        onPress={() => {
          Linking.openURL('https://youtube.com/@EngineerCodewala');
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});
