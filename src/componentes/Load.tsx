import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View, ViewProps } from 'react-native';

import loadAnimation from '../assets/load.json';

export default function Load({ ...rest }: ViewProps): JSX.Element {
  return (
    <View style={styles.container} {...rest}>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
        testID="imageAnimated"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
  },
});
