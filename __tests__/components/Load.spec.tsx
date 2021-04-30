import React from 'react';
import { render } from '@testing-library/react-native';

import Load from '../../src/componentes/Load';
import sourceJson from '../../src/assets/load.json';

describe('Load.spec.tsx', () => {
  test('render load', () => {
    const { getByTestId } = render(<Load />);
    const textButton = getByTestId('imageAnimated');

    expect(textButton.props.autoPlay).toBeTruthy();
    expect(textButton.props.loop).toBeTruthy();
    expect(textButton.props.sourceJson).toBe(JSON.stringify(sourceJson));
  });
});
