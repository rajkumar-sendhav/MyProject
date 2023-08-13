import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';

const ScreenB = ({navigation}) => {
  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={GlobalStyle.ButtonText}>Go Back to ScreenA</Text>
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
  },
});

export default ScreenB;
