import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { ApplicationState } from '../store';
import { setName } from '../store/ducks/user/actions';

import Button from '../componentes/Button';

export default function UserIndentification(): JSX.Element {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const name = useSelector(
    (state: ApplicationState) => state.user.dataUser.name,
  );

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    dispatch(setName({ name: value }));
    setIsFilled(true);
  }

  function handleConfirmation() {
    navigation.navigate('Confirmation');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        testID="keyboardView"
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{isFilled ? '😄' : '😃'}</Text>

              <Text style={styles.title}>Como podemos chamar voce?</Text>
            </View>

            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderBottomColor: colors.green },
              ]}
              placeholder="Digite o seu nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
              value={name}
              testID="input"
            />

            <View style={styles.footer}>
              <Button
                title="Confirmar"
                onPress={handleConfirmation}
                testID="button"
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
});
