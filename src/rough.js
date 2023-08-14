import {View, Dimensions, Animated, StyleSheet, Button} from 'react-native';
import React, {useRef, useState} from 'react';

const {width} = Dimensions.get('window');
const boxWidth = 100;

const TranslateAnimated = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [onRight, setOnRight] = useState(false);
  const animate = () => {
    Animated.spring(translateX, {
      toValue: onRight ? 0 : width - boxWidth,
      useNativeDriver: true,
    }).start();
    setOnRight(!onRight);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{translateX}]}]} />
      <View style={styles.btn}>
        <Button
          onPress={animate}
          title={onRight ? 'Move Left' : 'Move Right'}
        />
      </View>
    </View>
  );
};

export default TranslateAnimated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  box: {
    height: boxWidth,
    width: boxWidth,
    backgroundColor: '#ab0b00',
  },
  btn: {
    paddingHorizontal: 50,
  },
});
