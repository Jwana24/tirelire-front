// modules
import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView, ScrollView
} from 'react-native';
import { API_URL } from '@env';
import Axios from 'axios';
import Moment from 'moment';

// components
import Form from '../../ReusableComponent/Form';

const Transaction = () => {
    const [transaction, setTransaction] = useState({
        name: '',
        amount: '',
        date: ''
    });
    const [selectTransaction, setSelectTransaction] = useState(''); // transaction selected on the 'DropDownPicker'

    const handleSubmit = () => {
        let tmp = transaction;
        tmp.date = Moment(tmp.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
        Axios.post(`${API_URL}/var-${selectTransaction}`, transaction) // ".../var-expenses" or ".../var-incomes"
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
            >
                <Form
                    titleForm='Ajouter une transaction'
                    isSelect
                    itemSelect={[
                        { label: 'Revenu variable', value: 'incomes' },
                        { label: 'Dépense variable', value: 'expenses' }
                    ]}
                    valueSelect={selectTransaction}
                    onChangeSelect={item => setSelectTransaction(item.value)}
                    titleNameTrans='Nom de la transaction'
                    nameTrans={transaction.name}
                    onChangeTextName={name => setTransaction({...transaction, name})}
                    accountTrans={transaction.amount}
                    onChangeTextAccount={amount => setTransaction({...transaction, amount})}
                    dateInput={transaction.date}
                    onDateChange={date => setTransaction({...transaction, date})}
                    isBtnValidate
                    onPress={handleSubmit}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Transaction;