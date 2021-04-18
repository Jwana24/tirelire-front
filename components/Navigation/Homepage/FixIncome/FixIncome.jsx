// modules
import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView, ScrollView, View, Text, StyleSheet
} from 'react-native';
import { Divider } from 'react-native-elements';
import { API_URL } from '@env';
import Axios from 'axios';
// import Moment from 'moment';

// components
import Form from '../../../ReusableComponent/Form';

const FixIncome = () => {
    const [incomeData, setIncomeData] = useState([{
        name: '',
        amount: '',
        date: ''
    }]);
    const [inputText, setInputText] = useState('');

    const handleChangeText = (text) => {
        setInputText(text);
    };

    useEffect(() => {
        Axios.get(`${API_URL}/fix-incomes`)
        .then(res => {
            setIncomeData(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const handleSubmit = (data) => {
        console.log(data);
    };

    return (
        <KeyboardAvoidingView
            behavior="position"
        >
            <ScrollView
                showsVerticalScrollIndicator='false'
            >
                <View style={styles.containerVar}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Tous les revenus fixes</Text>
                    </View>
                    <View style={styles.addIncome}>
                        <View style={styles.containerPlus}>
                            <Text style={styles.plusIncome}>+</Text>
                        </View>
                        <View style={styles.containerTextAddIncome}>
                            <Text style={styles.textAddIncome}>Ajouter un revenu fixe</Text>
                        </View>
                    </View>
                </View>
                {
                    incomeData.map((data, index) => {
                        return (
                            <View>
                                <Form
                                    key={index}
                                    titleNameTrans='Nom du revenu'
                                    nameTrans={data.fix_income_name}
                                    accountTrans={String(data.fix_income_amount)}
                                    onChangeTextName={handleChangeText}
                                    onChangeTextAccount={amount => setIncomeData({...data, amount})}
                                    dateInput={data.fix_income_date}
                                    onDateChange={date => setIncomeData({...data, date})}
                                />
                                <Divider style={{ marginTop: 40, }} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    containerVar: {
        flex: 1,
        width: 250,
        marginTop: 30,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
    },
    containerContent: {
        flex: 2,
    },
    addIncome: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },
    containerPlus: {
        width: 53,
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: '#ffff',
        borderRadius: 50,
        shadowColor: '#bdc3c7',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    plusIncome: {
        fontFamily: 'Rubik-Regular',
        fontSize: 40,
        color: '#A0D4A0'
    },
    containerTextAddIncome: {
        flex: 0.8,
    },
    textAddIncome: {
        fontFamily: 'Rubik-Light',
        fontSize: 20,
    },
});

export default FixIncome;