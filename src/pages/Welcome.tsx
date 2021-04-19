import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export default function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma facil
            </Text>

            <Image source={wateringImg} style={styles.image} />

            <Text style={styles.subTitle}>
                Nao esqueca mais de tegar suas plantas.
                nos cuidamos de lembrar voce sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text>
                    >
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    image: {
        width: 292,
        height: 284,
    }
})

// #missaoespacial
