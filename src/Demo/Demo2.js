// Using the state Hook

// Component : There are two type of data, sate and props in React Native which control the component.

// 1. The component that uses the state is mutable. They can be changed later on if required.

// 2. The props component is immutable, and it's fixed throughout the lifetime.

// create a page
// Class Component : Before, React Native suggested React component to create a page, but in newer version it announced that it would expand with React Hook, But React still supports the component. They have been written and he doesn't intend to rewrite them.

// Hook Function: Hooks are functions that let you "hook into" React state and lifecycle features from function components. hooks don't work inside classes, they let you use without classes.

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  const onClickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{counter * 5}</Text>
      <Button title="Add" onPress={onClickHandler} />
      <Text style={styles.text}>You clicked {counter} times</Text>
    </View>
  );
};

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

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /*
const App = () => {
  const [name, setName] = useState('Ram');
  const [session, setSession] = useState({number: 6, tittle: 'state'});
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Programming with Ram');
    setSession({number: 7, tittle: 'Style'});
    setCurrent(false);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>
        This is session number {session.number} and about {session.tittle}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Button title="Update State" onPress={onClickHandler} />
    </View>
  );
};
  */
}
