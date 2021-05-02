// modules
import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView, ScrollView, View, Text, StyleSheet, TouchableWithoutFeedback, Alert
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
    const [newIncome, setNewIncome] = useState({
        name: '',
        amount: '',
        date: ''
    });

    const [inputText, setInputText] = useState('');
    const [showNewForm, setShowNewForm] = useState(false);

    const [successPost, setSuccessPost] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [successUpdate, setSuccessUpdate] = useState(false);
    const [errorPost, setErrorPost] = useState(false);
    const [errorDelete, setErrorDelete] = useState(false);
    const [errorUpdate, setErrorUpdate] = useState(false);

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
        // transform french date into english date format to send it to the back
        let tmp = newIncome;
        tmp.date = Moment(tmp.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
        Axios.post(`${API_URL}/fix-incomes`, newIncome)
        .then(res => {
            if (res.data) {
                setNewIncome(res.data)
            }
            // empty the array after posting the entry
            setNewIncome({
                name: '',
                amount: '',
                date: ''
            });
            // hide form for new entry when the "validate" button is clicked
            setShowNewForm(false);
            // get all incomes with the new entry too
            getAllIncomes();
            // display success message for 5 seconds
            setSuccessPost(true);
            setTimeout(() => setSuccessPost(false), 5000);
        })
        .catch(err => {
            // check if all the data is correct
            if (!newIncome.name || !newIncome.amount || !newIncome.date) {
                console.error(err);
                alert('Vous avez oublié de remplir un des champs');
            }
            // if there is an error, display the message for 5 seconds
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
            console.error(err);
        });
    };

    const handleDelete = (id) => {
        Axios.delete(`${API_URL}/fix-incomes/${id}`)
        .then(res => {
            const incomes = incomeData.filter(incomes => incomes.fix_income_id !== id);
            setIncomeData(incomes);
            setSuccessDelete(true);
            setTimeout(() => setSuccessDelete(false), 5000);
        })
        .catch(err => {
            console.error(err);
            setErrorDelete(true);
            setTimeout(() => setErrorDelete(false), 5000);
        });
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator='false'
        >
            <View style={styles.containerVar}>
                {/* Creation of all messages, success and error messages texts for posting, updating and deleting incomes */}
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
                            colorStyle={styles.input}
                            titleNameTrans='Nom du revenu fixe'
                            nameTrans={newIncome.name}
                            onChangeTextName={name => setNewIncome({...newIncome, name})}
                            accountTrans={newIncome.amount}
                            onChangeTextAccount={amount => setNewIncome({...newIncome, amount})}
                            dateInput={newIncome.date}
                            onDateChange={date => setNewIncome({...newIncome, date})}
                            isBtnValidate
                            onValidate={handleSubmit}
                            btnStyle={styles.btnSubmit}
                        />
                    )
                }
            </View>
            {
                incomeData && incomeData.map(data => {
                    return (
                        <View>
                            <Form
                                colorStyle={styles.input}
                                key={data.fix_income_id}
                                titleNameTrans='Nom du revenu'
                                isDelete
                                showModal={() => {Alert.alert(
                                    'Êtes-vous sur de vouloir supprimer ce revenu fixe ?',
                                    null,
                                    [
                                      {text: 'Annuler', onPress: () => null},
                                      {text: 'Supprimer', onPress: () => handleDelete(data.fix_income_id)},
                                    ],
                                    { cancelable: false }
                                  )}}
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
    );
}

const styles = StyleSheet.create({
    containerVar: {
        flex: 1,
        width: 250,
        marginTop: 30,
    },
    input: {
        width: '100%',
        height: 40,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 23,
        borderColor: '#A0D4A0',
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
    btnSubmit: {
        marginTop: 20,
        borderRadius: 23,
        backgroundColor: '#A0D4A0',
    },
});

export default FixIncome;