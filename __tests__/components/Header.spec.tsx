/* eslint-disable import/extensions */
import React from 'react';
import { render } from '../../testUtils';

import Header from '../../src/componentes/Header';

describe('Header.spec.tsx', () => {
  test('render header', () => {
    const mockStateUser = { user: { dataUser: { name: 'edu' } } };

    const { getByTestId } = render(<Header />, {
      initialState: mockStateUser,
    });
    const textName = getByTestId('textName');

    expect(textName.props.children).toBe(mockStateUser.user.dataUser.name);
  });
});
