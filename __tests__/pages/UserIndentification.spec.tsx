/* eslint-disable import/extensions */
import React from 'react';
import { Platform } from 'react-native';
import { render, fireEvent, waitFor } from '../../testUtils';

import UserIndentification from '../../src/pages/UserIndentification';
import colors from '../../src/styles/colors';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('UserIndentification.spec.tsx', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  test('render button with text', () => {
    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<UserIndentification />, {
      initialState: mockStateUser,
    });
    const input = getByTestId('input');

    expect(input.props.value).toBe('');
  });

  test('render button with text', () => {
    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<UserIndentification />, {
      initialState: mockStateUser,
    });
    const input = getByTestId('input');

    const text = 'teste';
    fireEvent.changeText(input, text);

    expect(input.props.value).toBe(text);
  });

  test('render button with text', () => {
    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<UserIndentification />, {
      initialState: mockStateUser,
    });
    const button = getByTestId('button');

    fireEvent.press(button);

    expect(mockedNavigate).toHaveBeenCalledWith('Confirmation');
  });

  test('render button with text dd', async () => {
    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<UserIndentification />, {
      initialState: mockStateUser,
    });
    const input = getByTestId('input');

    fireEvent(input, 'focus');

    await waitFor(() => {
      expect(input.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            borderBottomColor: colors.green,
          }),
        ]),
      );
    });
  });

  test('render button with text dd', async () => {
    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<UserIndentification />, {
      initialState: mockStateUser,
    });
    const input = getByTestId('input');

    fireEvent(input, 'blur');

    await waitFor(() => {
      expect(input.props.style).not.toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            borderBottomColor: colors.green,
          }),
        ]),
      );
    });
  });

  test('render button with text d', async () => {
    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<UserIndentification />, {
      initialState: mockStateUser,
    });
    const input = getByTestId('input');

    fireEvent.changeText(input, 'dasdd');

    fireEvent(input, 'blur');

    await waitFor(() => {
      expect(input.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            borderBottomColor: colors.green,
          }),
        ]),
      );
    });
  });

  test('render button with text d', async () => {
    Platform.OS = 'ios';

    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<UserIndentification />, {
      initialState: mockStateUser,
    });
    const keyboardView = getByTestId('keyboardView');

    expect(keyboardView.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          paddingBottom: 0,
        }),
      ]),
    );
  });

  test('render button with text d', async () => {
    Platform.OS = 'android';

    const mockStateUser = { user: { dataUser: { name: '' } } };

    const { getByTestId } = render(<UserIndentification />, {
      initialState: mockStateUser,
    });
    const keyboardView = getByTestId('keyboardView');

    expect(keyboardView.props.style).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          paddingBottom: 0,
        }),
      ]),
    );
  });
});
