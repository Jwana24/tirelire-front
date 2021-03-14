import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import {
    StyleSheet, View, ScrollView, Image, Text, KeyboardAvoidingView, FlatList
} from 'react-native';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

import { API_URL } from '@env';
import FormIncome from './FormIncome/FormIncome';

const Income = () => {
    const { control, handleSubmit, errors } = useForm();

    const income = 'Salaire';

    const [ incomeData, setIncomeData ] = useState([]);
    const [ incomeForm, setIncomeForm ] = useState({});
    const [ errorForm, setErrorForm ] = useState({});
    const [ inputText, setInputText ] = useState('');

    const handleChangeText = (text) => {
        setInputText(text);
    };
    
    const onSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        Axios.get(`${API_URL}/api/incomes`)
        .then(res => {
            setIncomeData(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    // const postIncome = () => {
    //     Axios.post(`${API_URL}/api/incomes`, incomeData)
    //     .then(res => {
    //         if (res.data.status == 'success') {
    //             setIncomeData(res.data);
    //             console.log(incomeData);
    //         }
    //         else {
    //             console.log('merde')
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err.res.data.message);
    //     });
    // };
    
    // useEffect(() => {
    //     postIncome();
    // }, []);

    return (
        <KeyboardAvoidingView
            behavior="position"
        >
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <ScrollView showsVerticalScrollIndicator='false'>
                    <View style={styles.containerIncome}>
                        <View style={styles.containerTop}>
                            <Text style={{ textAlign:'center',fontFamily: 'Rubik-Medium', fontSize: 25, color: '#2D3436' }}>Modifier ou ajouter un solde</Text>
                            <View style={styles.containerLogo}>
                                <Image source={require('../../../../assets/icons/revenus.png')} />
                            </View>
                        </View>
                        <View style={styles.containerIncomeForms}>

                            {/* {incomeData && incomeData.map(elem => {
                                return (
                                    <View style={styles.containerForm}>
                                        <FormIncome
                                            elem={elem}
                                            keyExtractor={elem => elem.income_id.toString()}    
                                        />
                                    </View> */}
                                    <FlatList
                                        data={incomeData}
                                        keyExtractor={(item) => item.income_id}
                                        renderItem={({ item }) => <FormIncome income={item} />}
                                    />
                                {/* )
                            })} */}

                        </View>
                    </View>
                </ScrollView>
            {/* </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    containerIncome: {
        width: 260,
        paddingBottom: 80,
        marginTop: 20,
    },
    containerTop: {
        alignItems: 'center',
    },
    containerLogo: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#A0D4A0',
        borderRadius: 50,
    },
    containerIncomeForms: {
        marginTop: 30,
    },
    // btnValidate: {
    //     fontFamily: 'Rubik-Regular',
    //     fontSize: 30,
    //     color: 'white',
    //     backgroundColor: '#5CBF91',
    //     borderRadius: 29
    // },
});

export default Income;