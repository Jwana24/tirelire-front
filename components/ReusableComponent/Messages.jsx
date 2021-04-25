import React from 'react';
import {
    StyleSheet, View, Text, Image
} from 'react-native';

const Messages = ({ isSuccess, isError, textMessage }) => {
    return (
        <View style={styles.containerMessage}>
            <View style={styles.containerIconMessage}>
                <Image
                    source={isSuccess ? require('../../assets/icons/success.png') : isError ? require('../../assets/icons/error.png') : null}
                    style={styles.iconMessage}
                />
            </View>
            <View style={styles.containerTextMessage}>
                <Text style={isSuccess ? styles.textSuccessMessage : isError ? styles.textErrorMessage : null}>{textMessage}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMessage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },
    containerIconMessage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    iconMessage: {
        width: 35,
        height: 35,
    },
    containerTextMessage: {
        flex: 0.8,
    },
    textSuccessMessage: {
        fontFamily: 'Rubik-Medium',
        fontSize: 16,
        color: '#5CBF91',
    },
    textErrorMessage: {
        fontFamily: 'Rubik-Medium',
        fontSize: 16,
        color: '#EB4D4B',
    },
});

export default Messages;