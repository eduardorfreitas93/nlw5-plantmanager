import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Welcome from '../../src/pages/Welcome';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Welcome.spec.tsx', () => {
  test('render button with text', () => {
    const { getByTestId } = render(<Welcome />);
    const button = getByTestId('button');

    fireEvent.press(button);

    expect(mockedNavigate).toHaveBeenCalledWith('UserIndentification');
  });
});
