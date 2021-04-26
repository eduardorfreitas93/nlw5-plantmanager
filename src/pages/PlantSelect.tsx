import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Header from '../componentes/Header';
import EnviromentButton from '../componentes/EnviromentButton';
import Load from '../componentes/Load';
import PlantCardPrimary from '../componentes/PlantCardPrimary';

import { IPlant } from '../store/ducks/plants/types';

import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ApplicationState } from '../store';
import { addPlants, setFilteredPlants } from '../store/ducks/plants/actions';
import { addEnvironments } from '../store/ducks/environments/actions';

export default function PlanSelect(): JSX.Element {
  const dispatch = useDispatch();
  const plants = useSelector(
    (state: ApplicationState) => state.plants.dataPlants,
  );

  const filteredPlants = useSelector(
    (state: ApplicationState) => state.plants.dataFilteredPlants,
  );

  const enviroment = useSelector(
    (state: ApplicationState) => state.environments.dataEnvironments,
  );

  const [enviromentSelected, setEnviromentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  function handelEnviromentSelected(key: string): void {
    setEnviromentSelected(key);

    if (key === 'all') {
      dispatch(setFilteredPlants(plants));
      return;
    }

    const filtered = plants.filter(plant => plant.environments.includes(key));

    dispatch(setFilteredPlants(filtered));
  }

  async function fetchPlants(): Promise<void> {
    await dispatch(addPlants(page));
    setLoading(false);
    setLoadingMore(false);
  }

  function handelFetchMore(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
  }

  useEffect(() => {
    dispatch(addEnvironments());
  }, []);

  useEffect(() => {
    fetchPlants();
  }, [page]);

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual amiente</Text>
        <Text style={styles.subtitle}>voce quer colocar sua planata?</Text>
      </View>

      <View>
        <FlatList
          data={enviroment}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={item.key === enviromentSelected}
              onPress={() => handelEnviromentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handelFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});
