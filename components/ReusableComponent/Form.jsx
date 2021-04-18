import React from 'react';
import {
    StyleSheet, View, TextInput, Text, Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import { Button } from 'react-native-elements';

const Form = ({
    titleForm,
    // isButton,
    isSelect, itemSelect, valueSelect, onChangeSelect,
    titleNameTrans, nameTrans, onChangeTextName,
    accountTrans, onChangeTextAccount,
    dateInput, onDateChange,
    isBtnValidate, onPress
}) => {
    return (
        <View style={styles.containerVar}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{titleForm}</Text>
            </View>
            <View style={styles.containerContent}>
                {/* {
                    isButton ?
                    <View style={styles.addIncome}>
                        <View style={styles.containerPlus}>
                            <Text style={styles.plusIncome}>+</Text>
                        </View>
                        <View style={styles.containerTextAddIncome}>
                            <Text style={styles.textAddIncome}>Ajouter un nouveau revenu</Text>
                        </View>
                    </View>
                    : null
                } */}
                {
                    isSelect ?
                    <DropDownPicker
                        dropDownStyle={{ borderRadius: 23, borderColor: '#2D3436' }}
                        style={{ marginTop: 20, borderRadius: 23, borderColor: '#2D3436' }}
                        items={itemSelect}
                        defaultValue={valueSelect}
                        onChangeItem={onChangeSelect}
                        placeholder='Type de transaction'
                    />
                    : null
                }
                <View style={{ justifyContent: 'center', }}>
                    <View>
                        <Text style={styles.label}>{titleNameTrans}</Text>
                        <TextInput
                            defaultValue={nameTrans}
                            onChangeText={onChangeTextName}
                            keyboardAppearance='dark'
                            style={styles.input}
                            errorStyle={{ color: 'red' }}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Montant</Text>
                        <Image
                            source={require('../../assets/icons/euro.png')}
                            style={styles.iconEuro}
                        />
                        <TextInput
                            keyboardAppearance='dark'
                            keyboardType='numeric'
                            numeric
                            defaultValue={accountTrans}
                            onChangeText={onChangeTextAccount}
                            style={styles.input}
                            errorStyle={{ color: 'red' }}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', }}>
                        <Text style={styles.label}>Date</Text>

                        <DatePicker
                            // date='20/03/21'
                            date={dateInput}
                            mode='date'
                            format="DD-MM-YYYY"
                            confirmBtnText='Valider'
                            cancelBtnText='Annuler'
                            placeholder='Sélectionner une date'
                            style={styles.input}
                            iconSource={require('../../assets/icons/calendar.png')}
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
                            onDateChange={onDateChange}
                        />
                    </View>
                </View>

                {
                    isBtnValidate ?
                    <Button
                        title='Valider'
                        onPress={onPress}
                        buttonStyle={styles.btnValidate}
                    />
                    : null
                }
            </View>
        </View>
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
    // addIncome: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginVertical: 25,
    // },
    // containerPlus: {
    //     width: 53,
    //     height: 53,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginRight: 15,
    //     backgroundColor: '#ffff',
    //     borderRadius: 50,
    //     shadowColor: '#bdc3c7',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.8,
    //     shadowRadius: 2,
    // },
    // plusIncome: {
    //     fontFamily: 'Rubik-Regular',
    //     fontSize: 40,
    //     color: '#A0D4A0'
    // },
    // containerTextAddIncome: {
    //     flex: 0.8,
    // },
    // textAddIncome: {
    //     fontFamily: 'Rubik-Light',
    //     fontSize: 20,
    // },
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
        borderColor: '#A0D4A0',
        borderRadius: 23,
    },
    iconEuro: {
        position: 'absolute',
        top: 60,
        right: 15,
        width: 26,
        height: 24,
    },
    btnValidate: {
        marginVertical: 20,
        fontFamily: 'Rubik-Regular',
        fontSize: 30,
        color: 'white',
        backgroundColor: '#A0D4A0',
        borderRadius: 29
    },
});

export default Form;