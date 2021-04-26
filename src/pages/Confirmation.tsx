import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import Button from '../componentes/Button';
import { ApplicationState } from '../store';

export default function Confirmation(): JSX.Element {
  const userName = useSelector(
    (state: ApplicationState) => state.user.dataUser.name,
  );
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate('PlantSelect');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😃</Text>

        <Text style={styles.title}>Prontinho {userName}</Text>

        <Text style={styles.subtitle}>
          Agora vamos comecar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Comecar" onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  emoji: {
    fontSize: 50,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  footer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 50,
  },
});
