// Image & ImageBackground

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRhwToTtEal8kaGXsT8U4Cl6lnuiLxjcjpg&usqp=CAU',
      }}>
      <Modal
        visible={showWarning}
        onRequestClose={() => setShowWarning(false)}
        transparent
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <View style={styles.warning_body}>
                <Text style={styles.text}>WARNING!</Text>
              </View>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 characters
              </Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color: '#fff'}}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Ram"
        onChangeText={value => setName(value)}
      />
      {/* <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        // disabled={submitted}
        color="#00f"
      /> */}
      {/* <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity> */}
      <Pressable
        onPress={onPressHandler}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : 'orange'},
          styles.button,
        ]}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <View style={styles.container}>
          <Text style={styles.text}>Your are registered as {name}</Text>
          <Image
            source={require('./assets/done1.png')}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          source={{
            uri: 'https://e7.pngegg.com/pngimages/969/637/png-clipart-black-and-pink-oops-art-work-comics-explosion-cloud-dialog-love-text-thumbnail.png',
          }}
          style={styles.image}
          resizeMode="stretch"
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 55,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: 'skyblue',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;
