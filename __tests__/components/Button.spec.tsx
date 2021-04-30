import React from 'react';
import { render } from '@testing-library/react-native';

import Button from '../../src/componentes/Button';

describe('Button.spec.tsx', () => {
  test('render button with text', () => {
    const text = 'test';
    const { getByTestId } = render(<Button title={text} />);
    const textButton = getByTestId('textButton');

    expect(textButton.props.children).toBe(text);
  });
});
