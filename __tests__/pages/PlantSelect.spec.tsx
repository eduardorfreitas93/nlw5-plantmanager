/* eslint-disable import/extensions */
import React from 'react';
import MockAdapter from 'axios-mock-adapter';

import { render, waitFor, fireEvent } from '../../testUtils';

import PlantSelect from '../../src/pages/PlantSelect';
import api from '../../src/services/api';

const mock = new MockAdapter(api);

describe('PlantSelect.spec.tsx', () => {
  const plantsArray = [
    {
      id: 1,
      name: 'Aningapara',
      about:
        'É uma espécie tropical que tem crescimento rápido e fácil manuseio.',
      water_tips:
        'Mantenha a terra sempre húmida sem encharcar. Regue 2 vezes na semana.',
      photo: '',
      environments: ['living_room'],
      frequency: {
        times: 2,
        repeat_every: 'week',
      },
    },
    {
      id: 2,
      name: 'Aningapara',
      about:
        'É uma espécie tropical que tem crescimento rápido e fácil manuseio.',
      water_tips:
        'Mantenha a terra sempre húmida sem encharcar. Regue 2 vezes na semana.',
      photo: '',
      environments: ['kitchen'],
      frequency: {
        times: 2,
        repeat_every: 'week',
      },
    },
  ];

  const mockStateUser = {
    plants: {
      dataPlants: [],
      dataFilteredPlants: [],
    },
    environments: { dataEnvironments: [] },
  };

  test('render button with text1', async () => {
    const { getByTestId } = render(<PlantSelect />, {
      initialState: mockStateUser,
    });
    const load = getByTestId('load');

    expect(load).toBeTruthy();
  });

  test('render button with text2', async () => {
    mock
      .onGet('/plants_environments?_sort=title&_order=asc')
      .reply(200, [{ key: 'a', title: 'John Smith' }]);

    mock
      .onGet('/plants?_sort=name&_order=asc&_page=1&_limit=8')
      .reply(200, plantsArray);

    const { getByTestId, queryByTestId } = render(<PlantSelect />, {
      initialState: mockStateUser,
    });

    await waitFor(() => {
      const load = queryByTestId('load');
      expect(load).not.toBeTruthy();

      const list = getByTestId('enviromentList');
      expect(list.props.data.length).toBe(2);

      const activityIndicator = queryByTestId('activityIndicator');

      expect(activityIndicator).not.toBeTruthy();
    });
  });

  test('render button with text3', async () => {
    mock
      .onGet('/plants_environments?_sort=title&_order=asc')
      .reply(200, [{ key: 'living_room', title: 'John Smith' }]);

    mock
      .onGet('/plants?_sort=name&_order=asc&_page=1&_limit=8')
      .reply(200, plantsArray);

    const { getAllByTestId, getByTestId } = render(<PlantSelect />, {
      initialState: mockStateUser,
    });

    await waitFor(() => {
      const item = getAllByTestId('enviromentItem');
      fireEvent.press(item[1]);

      const listPlants = getByTestId('plantsList');

      expect(listPlants.props.data.length).toBe(1);
      expect(listPlants.props.data[0].environments).toEqual(
        expect.arrayContaining(['living_room']),
      );
    });
  });

  test('render button with text6', async () => {
    mock
      .onGet('/plants_environments?_sort=title&_order=asc')
      .reply(200, [{ key: 'living_room', title: 'John Smith' }]);

    mock
      .onGet('/plants?_sort=name&_order=asc&_page=1&_limit=8')
      .reply(200, plantsArray);

    const { getAllByTestId, getByTestId } = render(<PlantSelect />, {
      initialState: mockStateUser,
    });

    await waitFor(() => {
      const item = getAllByTestId('enviromentItem');
      fireEvent.press(item[0]);

      const listPlants = getByTestId('plantsList');

      expect(listPlants.props.data.length).toBe(2);
      expect(listPlants.props.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            environments: expect.arrayContaining(['living_room']),
          }),
        ]),
      );
      expect(listPlants.props.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            environments: expect.arrayContaining(['kitchen']),
          }),
        ]),
      );
    });
  });

  test('render button with text5', async () => {
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 391,
        },
        contentSize: {
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          height: 100,
          width: 100,
        },
      },
    };

    mock
      .onGet('/plants?_sort=name&_order=asc&_page=1&_limit=8')
      .reply(200, plantsArray);

    const { getByTestId } = render(<PlantSelect />, {
      initialState: mockStateUser,
    });

    await waitFor(() => {
      const item = getByTestId('plantsList');
      fireEvent.scroll(item, eventData);

      const activityIndicator = getByTestId('activityIndicator');

      expect(activityIndicator).toBeTruthy();
    });
  });

  test('render button with text7', async () => {
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 400,
        },
        contentSize: {
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          height: 100,
          width: 100,
        },
      },
    };

    mock
      .onGet('/plants?_sort=name&_order=asc&_page=1&_limit=8')
      .reply(200, plantsArray);

    const { getByTestId, queryByTestId } = render(<PlantSelect />, {
      initialState: mockStateUser,
    });

    await waitFor(() => {
      const item = getByTestId('plantsList');
      fireEvent.scroll(item, eventData);

      const activityIndicator = queryByTestId('activityIndicator');

      expect(activityIndicator).not.toBeTruthy();
    });
  });

  test('render button with text4', async () => {
    mock
      .onGet('/plants?_sort=name&_order=asc&_page=1&_limit=8')
      .reply(200, plantsArray);

    const { getByTestId, queryByTestId } = render(<PlantSelect />, {
      initialState: mockStateUser,
    });

    await waitFor(() => {
      const load = queryByTestId('load');
      expect(load).not.toBeTruthy();

      const list = getByTestId('plantsList');
      expect(list.props.data.length).toBe(2);
    });
  });
});
