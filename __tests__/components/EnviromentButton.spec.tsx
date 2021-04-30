import React from 'react';
import { render } from '@testing-library/react-native';

import EnviromentButton from '../../src/componentes/EnviromentButton';
import colors from '../../src/styles/colors';
import fonts from '../../src/styles/fonts';

describe('EnviromentButton.spec.tsx', () => {
  const text = 'test';

  test('render button with text', () => {
    const { getByTestId } = render(<EnviromentButton title={text} />);
    const textButton = getByTestId('textButton');

    expect(textButton.props.children).toBe(text);
  });

  test('render button active', () => {
    const { getByTestId } = render(<EnviromentButton title={text} active />);

    const button = getByTestId('button');
    const textButton = getByTestId('textButton');

    expect(button.props.style.backgroundColor).toBe(colors.green_light);
    expect(textButton.props.style[1].color).toBe(colors.green_dark);
    expect(textButton.props.style[1].fontFamily).toBe(fonts.heading);
  });

  test('render button without active', () => {
    const { getByTestId } = render(<EnviromentButton title={text} />);

    const button = getByTestId('button');
    const textButton = getByTestId('textButton');

    expect(button.props.style.backgroundColor).toBe(colors.shape);
    expect(textButton.props.style[0].color).toBe(colors.heading);
    expect(textButton.props.style[0].fontFamily).toBe(fonts.text);
  });
});
