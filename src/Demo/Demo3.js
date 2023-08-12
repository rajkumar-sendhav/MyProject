// Styles & Style Sheet

import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style Text');

  const onClickHandler = () => {
    setName('Style Test is Done');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button title="Update State" onPress={onClickHandler} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 10,
  },
  text: {
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: 200,
    height: 60,
  },
});
