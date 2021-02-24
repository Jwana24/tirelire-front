import React from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './Homepage/Homepage';
import Income from './Homepage/Income/Income';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
});

const CustomHeader = ({ title, isHome, navigation }) => {
    return (
        // <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#5CBF91' }}>
        //     {
        //         isHome ?
        //         <View style={{ flex: 1, justifyContent: 'center' }}>
        //             {/* <Image
        //                 source={require('../../assets/icons/menu.png')}
        //                 style={{ width: 38, height: 22, marginLeft: 5 }}
        //                 resizeMode='contain'
        //             /> */}
        //         </View> :
        //         <TouchableOpacity
        //             style={{ flexDirection: 'row', alignItems: 'center' }}
        //             onPress={() => navigation.goBack()}
        //         >
        //             <Image
        //                 source={require('../../assets/icons/left-arrow.png')}
        //                 style={{ width: 18, height: 18, marginLeft: 5, marginRight: 5 }}
        //                 resizeMode='contain'
        //             />
        //             <Text>Retour</Text>
        //         </TouchableOpacity>
        //     }

        //     <View style={{ flex: 1.5, justifyContent: 'center' }}>
        //         <Text style={{ textAlign: 'center', color: 'white' }}>{title}</Text>
        //     </View>
        //     <View style={{ flex: 1 }}></View>
        // </View>
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#5CBF91' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {
                    isHome ?
                        // <Image
                        //     source={require('../../assets/icons/menu.png')}
                        //     style={{ width: 38, height: 22, marginLeft: 5 }}
                        //     resizeMode='contain'
                        // />
                        null :
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require('../../assets/icons/left-arrow.png')}
                            style={{ width: 18, height: 18, marginLeft: 5, marginRight: 5 }}
                            resizeMode='contain'
                        />
                        <Text>Retour</Text>
                    </TouchableOpacity>
                }
            </View>

            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>{title}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}
const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title='Accueil' isHome={true} navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Accueil')}
                >
                    <Homepage navigation={navigation} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const HomeStack = () => {
    return(
        <Stack.Navigator initialRouteName='Accueil'>
            <Stack.Screen name='Accueil' component={HomeScreen} options={navOptionHandler} />
        </Stack.Navigator>
    )
}

const IncomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title='Revenus' navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Revenus')}
                >
                    <Income />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const IncomeStack = () => {
    return(
        <Stack.Navigator initialRouteName='Revenus'>
            <Stack.Screen name='Revenus' component={IncomeScreen} options={navOptionHandler} />
        </Stack.Navigator>
    )
}


const Navigation = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Revenus" component={IncomeStack} />
        </Tab.Navigator>

        // <View style={styles.containerMenu}>
        //     <View style={styles.containerAllMenus}>
        //         <Image source={require('../../assets/icons/home.png')} style={styles.imgHome} />
        //         <Text style={styles.titleMenu}>Accueil</Text>
        //     </View>
        //     <View style={styles.containerAllMenus}>
        //         <Image source={require('../../assets/icons/list.png')} style={styles.imgList} />
        //         <Text style={styles.titleMenu}>Liste</Text>
        //     </View>
        //     <View style={styles.containerAllMenus}>
        //         <Image source={require('../../assets/icons/depenses.png')} style={styles.imgExpense} />
        //         <Text style={styles.titleMenu}>Dépen. f.</Text>
        //     </View>
        //     <View style={styles.containerAllMenus}>
        //         <Image source={require('../../assets/icons/argent.png')} style={styles.imgMoney} />
        //         <Text style={styles.titleMenu}>Revenus</Text>
        //     </View>
        //     <View style={styles.containerAllMenus}>
        //         <Image source={require('../../assets/icons/depenses.png')} style={styles.imgExpensePlus} />
        //         <Text style={styles.expensePlus}>+</Text>
        //         <Text style={styles.titleMenu}>Dépen. v.</Text>
        //     </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    containerMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#5CBF91',
    },
    containerAllMenus: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgHome: {
        flex: 0.4,
        width: 32,
        height: 32,
    },
    imgList: {
        flex: 0.4,
        width: 30,
        height: 34,
    },
    imgExpense: {
        flex: 0.4,
        width: 35,
        height: 29,
    },
    imgMoney: {
        flex: 0.4,
        width: 37,
        height: 31,
    },
    imgExpensePlus: {
        flex: 0.4,
        width: 35,
        height: 29,
    },
    expensePlus: {
        position: 'absolute',
        top: '-7%',
        left: '25%',
        fontSize: 18,
        fontFamily: 'Rubik-Bold',
    },
    titleMenu: {
        flex: 0.2,
        textAlign: 'center',
    },
});

export default Navigation;