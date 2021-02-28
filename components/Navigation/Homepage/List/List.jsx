import React from 'react';
import {
    StyleSheet, View, Image, Text
} from 'react-native';

const List = () => {
    return (
        <View>
            <Image source={require('../../../../assets/icons/liste.png')} style={styles.iconExpense} />
        </View>
    );
}

const styles = StyleSheet.create({
    iconExpense: {
        width: 27,
        height: 26,
    },
});

export default List;