import React from 'react';
import {
    StyleSheet, View, Image, Text
} from 'react-native';

const Menu = () => {
    return(
        <View style={styles.containerMenu}>
            <View>
                <Image source={require('../../assets/icons/home.png')} style={styles.imgMenu} />
            </View>
            <View>
                <Image source={require('../../assets/icons/list.png')} style={styles.imgMenu} />
            </View>
            <View>
                <Image source={require('../../assets/icons/depenses.png')} style={styles.imgExpense} />
            </View>
            <View>
                <Image source={require('../../assets/icons/argent.png')} style={styles.imgMenu} />
            </View>
            <View>
                <Image source={require('../../assets/icons/depenses.png')} style={styles.imgMenu} />
                <Text style={styles.expensePlus}>+</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMenu: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#5CBF91'
    },
    imgMenu: {
        width: 35,
        height: 29,
    },
    imgExpense: {
        width: 51,
        height: 42,
    },
    expensePlus: {
        position: 'absolute',
        top: '-7%',
        fontSize: 18,
        fontFamily: 'Rubik-Bold',
    }
});

export default Menu;