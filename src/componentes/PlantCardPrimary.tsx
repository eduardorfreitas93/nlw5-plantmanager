import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantCardPrimary extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export default function PlantCardPrimary({
  data,
  ...rest
}: PlantCardPrimary): JSX.Element {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text style={styles.title}>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
    marginVertical: 16,
  },
});
