import React from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity
} from 'react-native';

import Income from './Income/Income';
import FixExpense from './FixExpense/FixExpense';

const Homepage = ({navigation}) => {
    let income = 2000;
    let expense = 665;
    let total = income - expense;

    return(
        <View style={styles.containerHomepage}>
            <View style={styles.containerTitle}>
                <Image source={require('../../../assets/icons/money-logo.png')} style={styles.iconLogo} />
                <Text style={styles.textTitle}>Tirelire de poche</Text>
            </View>

            <View style={styles.containerIncome}>
                <View style={styles.containerImgIncome}>
                    <Image source={require('../../../assets/icons/argent.png')} style={styles.iconIcome} />
                </View>
                <Text style={styles.textIncome}>Mon argent total</Text>
                <Text style={styles.separator} />
                <Text style={styles.textMoney}>{income} €</Text>

                <View style={styles.containerBtnUpdate}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Revenus')}
                    >
                        <Income />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerExpense}>
                <View style={styles.containerImgExpense}>
                    <Image source={require('../../../assets/icons/depenses.png')} style={styles.iconIcome} />
                </View>
                <Text style={styles.textExpense}>Mes dépenses totales</Text>
                <Text style={styles.separator} />
                <Text style={styles.textMoney}>{expense} €</Text>

                <View style={styles.containerBtnUpdate}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Dépenses fixes')}
                    >
                        <FixExpense />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>Total restant :</Text>
                <Text style={styles.priceTotal}>{total} €</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHomepage: {
        flex: 8,
        marginTop: 30,
    },
    containerTitle: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    iconLogo: {
        width: 58,
        height: 53,
        marginRight: 10,
    },
    textTitle: {
        fontFamily: 'Rubik-Medium',
        fontSize: 25,
        color: '#5CBF91',
    },
    // Container vert argent
    containerIncome: {
        flex: 0.7,
        position: 'relative',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 50,
        backgroundColor: '#A0D4A0',
        borderRadius: 34,
    },
    containerImgIncome: {
        position: 'absolute',
        top: '-30%',
        backgroundColor: '#A0D4A0',
        borderWidth: 4,
        borderColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 70,

    },
    iconIcome: {
        width: 49,
        height: 42,
    },
    textIncome: {
        width: 150,
        paddingTop: 25,
        paddingBottom: 10,
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
        fontSize: 20,
        color: '#FEF7A6',
    },
    separator: {
        height: 0,
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#FEF7A6'
    },
    textMoney: {
        paddingTop: 10,
        fontFamily: 'Rubik-Medium',
        fontSize: 25,
        color: '#FEF7A6',
    },
    // Container rouge dépenses
    containerExpense: {
        flex: 0.7,
        position: 'relative',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
        paddingHorizontal: 50,
        backgroundColor: '#EB4D4B',
        borderRadius: 34,
    },
    containerImgExpense: {
        position: 'absolute',
        top: '-30%',
        backgroundColor: '#EB4D4B',
        borderWidth: 4,
        borderColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 70,
    },
    textExpense: {
        width: 170,
        paddingTop: 25,
        paddingBottom: 10,
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
        fontSize: 20,
        color: '#FEF7A6',
    },
    // Total
    containerTotal: {
        flex: 0.4,
        alignItems: 'center',
        paddingTop: 10,
    },
    textTotal: {
        fontFamily: 'Rubik-Medium',
        fontSize: 25,
    },
    priceTotal: {
        fontFamily: 'Rubik-Medium',
        fontSize: 30,
    },
    containerBtnUpdate: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '-10%',
        right: '-8%',
        width: 52,
        height: 52,
        backgroundColor: '#FFF',
        borderRadius: 50,
        shadowColor: '#bdc3c7',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
});

export default Homepage;