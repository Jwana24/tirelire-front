import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, TextInput, Text, Image, KeyboardAvoidingView, ScrollView, Controller, TouchableWithoutFeedback
} from 'react-native';
import { API_URL } from '@env';
import Axios from 'axios';
import Moment from 'moment';
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';

// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Divider } from 'react-native-paper';
// const { width, height } = Dimensions.get('window');

const Form = () => {
    const [transaction, setTransaction] = useState({
        name: '',
        amount: '',
        date: ''
    });
    const [selectTransaction, setSelectTransaction] = useState(''); // transaction selected on the 'DropDownPicker'

    const handleSubmit = () => {
        let tmp = transaction;
        tmp.date = Moment(tmp.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
        Axios.post(`${API_URL}/var-${selectTransaction}`, transaction)
        .then(res => {
            if (res.data) {
                setTransaction(res.data)
            }
            setTransaction({
                name: '',
                amount: '',
                date: ''
            });
        })
        .catch(err => {
            if (!transaction.name || !transaction.amount || !transaction.date) {
                console.log('error', err);
                alert('Vous avez oublié de remplir un des champs');
            }
        });
        setTransaction({
            name: '',
            amount: '',
            date: ''
        });
    }

    return (
        <KeyboardAvoidingView
            behavior="position"
        >
            <ScrollView
                showsVerticalScrollIndicator='false'
                // style={styles.containerGeneralVar}
            >
                <View style={styles.containerVar}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Ajouter une transaction</Text>
                    </View>
                    <View style={styles.containerContent}>
                        <DropDownPicker
                            dropDownStyle={{ borderRadius: 23, borderColor: '#2D3436' }}
                            style={{ marginTop: 20, borderRadius: 23, borderColor: '#2D3436' }}
                            items={[
                                { label: 'Revenu variable', value: 'incomes' },
                                { label: 'Dépense variable', value: 'expenses' }
                            ]}
                            defaultValue={selectTransaction}
                            onChangeItem={item => setSelectTransaction(item.value)}
                            placeholder='Type de transaction'
                        />
                        <View style={{ justifyContent: 'center', }}>
                            <View>
                                <Text style={styles.label}>Nom de la transaction</Text>
                                <TextInput
                                    defaultValue={transaction.name}
                                    onChangeText={name => setTransaction({...transaction, name})}
                                    keyboardAppearance='dark'
                                    style={styles.input}
                                    errorStyle={{ color: 'red' }}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>Montant</Text>
                                <Image
                                    source={require('../../../assets/icons/euro.png')}
                                    style={styles.iconEuro}
                                />
                                <TextInput
                                    keyboardAppearance='dark'
                                    keyboardType='numeric'
                                    numeric
                                    defaultValue={transaction.amount}
                                    onChangeText={amount => setTransaction({...transaction, amount})}
                                    style={styles.input}
                                    errorStyle={{ color: 'red' }}
                                />
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', }}>
                            <Text style={styles.label}>Date</Text>

                            <DatePicker
                                date={transaction.date}
                                mode='date'
                                format="DD-MM-YYYY"
                                // format="YYYY-MM-DD"
                                confirmBtnText='Valider'
                                cancelBtnText='Annuler'
                                placeholder='Sélectionner une date'
                                style={styles.input}
                                iconSource={require('../../../assets/icons/calendar.png')}
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        right: 0,
                                        top: 10,
                                        width: 21,
                                        height: 19,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        position: 'absolute',
                                        left: 0,
                                        borderWidth: 0,
                                    }
                                }}
                                onDateChange={date => setTransaction({...transaction, date})}
                            />
                        </View>

                        <Button
                            title='Valider'
                            onPress={handleSubmit}
                            buttonStyle={styles.btnValidate}
                        />
                        {/* <Divider /> */}
                    </View>
                </View>
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
    containerTitle: {
        flex: 0.5,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
    },
    containerContent: {
        flex: 2,
    },
    picker: {
        flex: 0.5
    },
    name: {
        fontFamily: 'Rubik-Regular',
        fontSize: 26,
        textAlign: 'center'
    },
    label: {
        padding: 15,
        fontFamily: 'Rubik-Regular',
        fontSize: 18,
        color: '#2D3436',
    },
    input: {
        width: '100%',
        height: 40,
        paddingHorizontal: 15,
        borderWidth: 1,
        // borderColor: '#A0D4A0',
        borderRadius: 23,
    },
    iconEuro: {
        position: 'absolute',
        top: 60,
        right: 15,
        width: 26,
        height: 24,
    },
    // iconCalendar: {
    //     position: 'absolute',
    //     top: 62,
    //     right: 15,
    //     width: 21,
    //     height: 19,
    // },
    btnValidate: {
        marginVertical: 20,
        fontFamily: 'Rubik-Regular',
        fontSize: 30,
        color: 'white',
        backgroundColor: '#2D3436',
        borderRadius: 29
    },
});

export default Form;