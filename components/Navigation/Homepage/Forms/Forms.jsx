import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
    StyleSheet, View, TextInput, Text, Button
} from 'react-native';

const Forms = () => {
    const { control, handleSubmit, errors } = useForm();
    const montantRef = React.useRef();
    const dateRef = React.useRef();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <View>
            <Text style={styles.label}>Montant</Text>
            <Controller
                name='montant'
                control={control}
                onFocus={() => {
                    montantRef.current.focus();
                }}
                render={(props) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={value => props.onChange(value)}
                        ref={montantRef}
                    />
                )}
                name="montant"
                defaultValue="montant"
                rules={{ required: true }}
            />
            <Text style={styles.label}>Date</Text>
            <Controller
                name='date'
                control={control}
                onFocus={() => {
                    dateRef.current.focus();
                }}
                render={(props) => (
                    <TextInput
                        {...props}
                        style={styles.input}
                        onChangeText={value => props.onChange(value)}
                        ref={dateRef}
                    />
                )}
                name="date"
                defaultValue="date"
                rules={{ required: true }}
            />

            <Button title="Valider" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        paddingHorizontal: 15,
        fontFamily: 'Rubik-Regular',
        fontSize: 18,
        color: '#2D3436',
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#A0D4A0',
        borderRadius: 23,
    }
});

export default Forms;