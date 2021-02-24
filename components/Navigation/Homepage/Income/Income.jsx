import React from 'react';
import {
    StyleSheet, View, Image, Text
} from 'react-native';

const Income = () => {
    return (
        <View>
            <Image source={require('../../../../assets/icons/edit-green.png')} style={styles.iconIcome} />
        </View>
    );
}

const styles = StyleSheet.create({
    iconIcome: {
        width: 27,
        height: 26,
    },
});

export default Income;