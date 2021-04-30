/* eslint-disable import/extensions */
import React from 'react';
import { fireEvent, render } from '../../testUtils';

import Confirmation from '../../src/pages/Confirmation';

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
    const mockStateUser = { user: { dataUser: { name: 'Eduardo' } } };

    const { getByTestId } = render(<Confirmation />, {
      initialState: mockStateUser,
    });
    const textTitle = getByTestId('textTitle');

    expect(textTitle.props.children).toEqual(
      expect.arrayContaining(['Eduardo']),
    );
  });

  test('render button with text', () => {
    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<Confirmation />, {
      initialState: mockStateUser,
    });
    const button = getByTestId('button');

    fireEvent.press(button);

    expect(mockedNavigate).toHaveBeenCalledWith('PlantSelect');
  });
});
