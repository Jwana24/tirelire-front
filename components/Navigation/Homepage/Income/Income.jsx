import React from 'react';
import {
    StyleSheet, View, Image, Text
} from 'react-native';

import Forms from '../Forms/Forms';

const Income = () => {
    const revenus = 'Salaire';
    return (
        <View>
            <View style={styles.containerTop}>
                <Text style={{ fontFamily: 'Rubik-Medium', fontSize: 25, color: '#2D3436' }}>Modifier ou ajouter un solde</Text>
                <View style={styles.containerLogo}>
                    <Image source={require('../../../../assets/icons/revenus.png')} />
                </View>
            </View>
            <View style={styles.containerIncome}>
                <Text style={styles.nameIncome}>{revenus}</Text>
                <Forms />
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconIcome: {
        width: 27,
        height: 26,
    },
    containerLogo: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#A0D4A0',
        borderRadius: 50
    },
    containerTop: {
        alignItems: 'center'
    },
    containerIncome: {
        marginTop: 30
    },
    nameIncome: {
        fontFamily: 'Rubik-Regular',
        fontSize: 26,
        textAlign: 'center'
    },
});

export default Income;