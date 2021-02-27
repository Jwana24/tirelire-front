import React from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './Homepage/Homepage';
import Income from './Homepage/Income/Income';
import FixExpense from './Homepage/FixExpense/FixExpense';

const CustomHeader = ({ title, isHome, navigation }) => {
    return (
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

const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();
const StackIncome = createStackNavigator();
const StackFixExpense = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
});

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
        <StackHome.Navigator initialRouteName='Accueil'>
            <StackHome.Screen name='Accueil' component={HomeScreen} options={navOptionHandler} />
        </StackHome.Navigator>
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
        <StackIncome.Navigator initialRouteName='Revenus'>
            <StackIncome.Screen name='Revenus' component={IncomeScreen} options={navOptionHandler} />
        </StackIncome.Navigator>
    )
}

const FixExpenseScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title='Dépenses fixes' navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Depenses-fixes')}
                >
                    <FixExpense />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const FixExpenseStack = () => {
    return(
        <StackFixExpense.Navigator initialRouteName='Depenses-fixes'>
            <StackFixExpense.Screen name='Depenses-fixes' component={FixExpenseScreen} options={navOptionHandler} />
        </StackFixExpense.Navigator>
    )
}


const Navigation = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Accueil') {
                        iconName = focused
                        ? require('../../assets/icons/home.png')
                        : require('../../assets/icons/home.png');
                    } else if (route.name === 'Revenus') {
                        iconName = focused
                        ? require('../../assets/icons/argent.png')
                        : require('../../assets/icons/argent.png');
                    } else if (route.name === 'Dépenses fixes') {
                        iconName = focused
                        ? require('../../assets/icons/depenses.png')
                        : require('../../assets/icons/depenses.png');
                    }
        
                    // You can return any component that you like here!
                    return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#5CBF91',
                inactiveTintColor: 'black',
            }}
        >
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Revenus" component={IncomeStack} />
            <Tab.Screen name="Dépenses fixes" component={FixExpenseStack} />
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