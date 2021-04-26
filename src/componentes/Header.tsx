import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet, Text, Image, View } from 'react-native';

import useImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>edu</Text>
      </View>
      <Image source={useImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});
