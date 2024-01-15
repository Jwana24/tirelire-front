import React from 'react';
import {
    StyleSheet, View, TextInput, Text, Image, TouchableWithoutFeedback
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';

const Form = ({
    titleForm,
    isSelect, itemSelect, valueSelect, onChangeSelect,
    titleNameTrans, nameTrans, onChangeTextName, isDelete, showModal,
    accountTrans, onChangeTextAccount,
    dateInput, onDateChange,
    isBtnValidate, onValidate, btnStyle,
    colorStyle
}) => {
    return (
        <View style={styles.containerVar}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{titleForm}</Text>
            </View>
            <View style={styles.containerContent}>
                {
                    isSelect &&
                    <DropDownPicker
                        dropDownStyle={{ borderRadius: 23, borderColor: '#2D3436' }}
                        style={{ marginTop: 20, borderRadius: 23, borderColor: '#2D3436' }}
                        items={itemSelect}
                        defaultValue={valueSelect}
                        onChangeItem={onChangeSelect}
                        placeholder='Type de transaction'
                    />
                }
                <View style={{ justifyContent: 'center', }}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.label}>{titleNameTrans}</Text>
                            {
                                isDelete &&
                                <TouchableWithoutFeedback onPress={showModal}>
                                    <Image
                                        source={require('../../assets/icons/delete.png')}
                                        style={styles.iconTrash}
                                    />
                                </TouchableWithoutFeedback>
                            }
                        </View>
                        <TextInput
                            defaultValue={nameTrans}
                            onChangeText={onChangeTextName}
                            keyboardAppearance='dark'
                            style={colorStyle}
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
                            style={colorStyle}
                            errorStyle={{ color: 'red' }}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', }}>
                        <Text style={styles.label}>Date</Text>

                        <DatePicker
                            date={dateInput}
                            mode='date'
                            format="DD-MM-YYYY"
                            confirmBtnText='Valider'
                            cancelBtnText='Annuler'
                            placeholder='Sélectionner une date'
                            style={colorStyle}
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
                            value={dateInput ?? new Date()}
                        />
                    </View>
                </View>

                {
                    isBtnValidate &&
                    <Button
                        title='Valider'
                        onPress={onValidate}
                        buttonStyle={btnStyle}
                    />
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
    iconTrash: {
        width: 26,
        height: 24,
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