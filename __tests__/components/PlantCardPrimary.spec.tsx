import React from 'react';
import { render } from '@testing-library/react-native';

import PlantCardPrimary from '../../src/componentes/PlantCardPrimary';

jest.mock('react-native-svg', () => ({
  SvgFromUri: () => <></>,
}));

describe('PlantCardPrimary.spec.tsx', () => {
  const data = {
    name: 'Aningapara',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/1.svg',
  };

  test('render', () => {
    const { getByTestId } = render(<PlantCardPrimary data={data} />);
    const text = getByTestId('text');

    expect(text.props.children).toBe(data.name);
  });
});
