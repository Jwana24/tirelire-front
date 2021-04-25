// modules
import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView, ScrollView, View, Text, StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import { Divider } from 'react-native-elements';
import { API_URL } from '@env';
import Axios from 'axios';
import Moment from 'moment';

// components
import Form from '../../../ReusableComponent/Form';
import Messages from '../../../ReusableComponent/Messages';

const FixIncome = () => {
    const [incomeData, setIncomeData] = useState([{
        name: '',
        amount: '',
        date: ''
    }]);
    const [inputText, setInputText] = useState('');
    const [showNewForm, setShowNewForm] = useState(false);
    const [newIncome, setNewIncome] = useState({
        name: '',
        amount: '',
        date: ''
    });
    const [successPost, setSuccessPost] = useState(false);
    const [successUpdate, setSuccessUpdate] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);

    const [errorPost, setErrorPost] = useState(false);
    const [errorUpdate, setErrorUpdate] = useState(false);
    const [errorDelete, setErrorDelete] = useState(false);

    const handleChangeText = (text) => {
        setInputText(text);
    };

    // get all fix incomes on the screen
    useEffect(() => {
        Axios.get(`${API_URL}/fix-incomes`)
        .then(res => {
            setIncomeData(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    // create new form onPress "Ajouter un revenu fixe" button to post new income
    const handleFormAppear = () => {
        setShowNewForm(true);
    };

    const handleSubmit = () => {
        let tmp = newIncome;
        tmp.date = Moment(tmp.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
        Axios.post(`${API_URL}/fix-incomes`, newIncome)
        .then(res => {
            if (res.data) {
                setNewIncome(res.data)
            }
            setNewIncome({
                name: '',
                amount: '',
                date: ''
            });
            setShowNewForm(false);
            getAllIncomes();
            setSuccessPost(true);
            setTimeout(() => setSuccessPost(false), 5000);
        })
        .catch(err => {
            if (!newIncome.name || !newIncome.amount || !newIncome.date) {
                console.log('error', err);
                alert('Vous avez oublié de remplir un des champs');
            }
            setErrorPost(true);
            setTimeout(() => setErrorPost(false), 5000);
        });
        setNewIncome({
            name: '',
            amount: '',
            date: ''
        });
    };

    const getAllIncomes = () => {
        Axios.get(`${API_URL}/fix-incomes`)
        .then(res => {
            setIncomeData(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <KeyboardAvoidingView
            behavior="position"
        >
            <ScrollView
                showsVerticalScrollIndicator='false'
            >
                <View style={styles.containerVar}>
                    {
                        (successPost || successUpdate || successDelete) && (
                            <Messages
                                isSuccess
                                textMessage={
                                    successPost ? 'Le revenu a bien été rajouté !'
                                    : successUpdate ? 'Le revenu a bien été modifié !'
                                    : successDelete ? 'Le revenu a bien été supprimé'
                                    : null
                                }
                            />
                        )
                    }
                    {
                        (errorPost || errorUpdate || errorDelete) && (
                            <Messages
                                isError
                                textMessage={
                                    errorPost ? "Le revenu n'a pas pu être enregistré"
                                    : errorUpdate ? "Le revenu n'a pas pu être mis à jour"
                                    : errorDelete ? "Le revenu n'a pas pu être supprimé"
                                    : null
                                }
                            />
                        )
                    }
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Tous les revenus fixes</Text>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={handleFormAppear}
                    >
                        <View style={styles.addIncome}>
                            <View style={styles.containerPlus}>
                                <Text style={styles.plusIncome}>+</Text>
                            </View>
                            
                            <View style={styles.containerTextAddIncome}>
                                <Text style={styles.textAddIncome}>Ajouter un revenu fixe</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {
                        showNewForm && (
                            <Form
                                titleNameTrans='Nom du revenu fixe'
                                nameTrans={newIncome.name}
                                onChangeTextName={name => setNewIncome({...newIncome, name})}
                                accountTrans={newIncome.amount}
                                onChangeTextAccount={amount => setNewIncome({...newIncome, amount})}
                                dateInput={newIncome.date}
                                onDateChange={date => setNewIncome({...newIncome, date})}
                                isBtnValidate
                                onPress={handleSubmit}
                            />
                        )
                    }
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