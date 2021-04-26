import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButton extends RectButtonProps {
  title: string;
  active?: boolean;
}

EnviromentButton.defaultProps = {
  active: false,
};

export default function EnviromentButton({
  title,
  active,
  ...rest
}: EnviromentButton): JSX.Element {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.title, active && styles.titleActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 76,
    backgroundColor: colors.shape,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  title: {
    fontFamily: fonts.text,
    color: colors.heading,
  },
  titleActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
