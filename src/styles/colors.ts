import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

export default {
  green: '#32B768',
  green_dark: colorScheme === 'dark' ? '#32B768' : '#2B7A4B',
  green_light: '#DAF2E4',

  heading: colorScheme === 'dark' ? '#DAF2E4' : '#52665A',
  body_dark: '#738078',
  body_light: '#AAB2AD',

  background: colorScheme === 'dark' ? '#383838' : '#FFFFFF',
  shape: colorScheme === 'dark' ? '#666666' : '#f0f0f0',
  white: '#FFFFFF',
  gray: '#CFCFCF',

  blue: '#3D7199',
  blue_light: '#EBF6FF',

  red: '#E83F5B',
};
