import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
    StyleSheet, View, TextInput, Text, Image, Controller, TouchableWithoutFeedback
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';
import { Divider } from 'react-native-paper';

const FormIncome = ({ income }) => {

    return (
        <View>
            <Text style={styles.nameIncome}>{income.income_name}</Text>
            <View style={{ justifyContent: 'center', }}>
                <Text style={styles.label}>Montant</Text>
                <Image
                    source={require('../../../../../assets/icons/euro.png')}
                    style={styles.iconEuro}
                />
                <TextInput
                    keyboardAppearance='dark'
                    keyboardType='numeric'
                    numeric
                    defaultValue={income.income_amount.toString()}
                    style={styles.input}
                    errorStyle={{ color: 'red' }}
                />
            </View>

            <View style={{ justifyContent: 'center', }}>
                <Text style={styles.label}>Date</Text>
                <Image
                    source={require('../../../../../assets/icons/calendar.png')}
                    style={styles.iconCalendar}
                />

                <View>

                    <DateTimePicker
                        value={income.income_date}
                        mode='date'
                        style={styles.input}
                        // onChange={}
                    />
                </View>
            </View>

            <Button
                title='Valider'
                // onPress={handleSubmit(onSubmit)}
                buttonStyle={styles.btnValidate}
            />

            <Divider />
        </View>
    );
}

const styles = StyleSheet.create({
    nameIncome: {
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
        height: 40,
        // paddingVertical: 5,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#A0D4A0',
        borderRadius: 23,
    },
    iconEuro: {
        position: 'absolute',
        top: 60,
        right: 10,
        width: 26,
        height: 24,
    },
    iconCalendar: {
        position: 'absolute',
        top: 62,
        right: 15,
        width: 21,
        height: 19,
    },
    btnValidate: {
        marginVertical: 20,
        fontFamily: 'Rubik-Regular',
        fontSize: 30,
        color: 'white',
        backgroundColor: '#5CBF91',
        borderRadius: 29
    },
});

export default FormIncome;