import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
    StyleSheet, View, TextInput, Text, Image, Controller, TouchableWithoutFeedback
} from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from 'react-native-elements';
import { Divider } from 'react-native-paper';

// import iconPrice from '../../../../assets/icons/'

const FormIncome = ({ income }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isVisible, setVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("Une date a été choisie: ", date);
        hideDatePicker();
    };

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

                <View style={styles.input}>
                {/* <TouchableWithoutFeedback>
                    <TextInput
                        style={styles.input}
                        value={income.income_date.toString()}
                    />
                </TouchableWithoutFeedback> */}

                <DateTimePickerModal
                    mode='datetime'
                    isVisible={isVisible}
                    onConfirm={(date) => {
                        setVisible(false); // <- first thing
                        setValue(parseDate(date)); 
                    }}
                    onCancel={() => setVisible(false)}
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
        // marginBottom: 10,
        paddingTop: 20,
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
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#A0D4A0',
        borderRadius: 23,
    },
    iconEuro: {
        position: 'absolute',
        top: 65,
        right: 10,
        width: 26,
        height: 24,
    },
    iconCalendar: {
        position: 'absolute',
        top: 67,
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