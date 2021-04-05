import React from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './Homepage/Homepage';
import List from './Homepage/List/List';
import Form from './Form/Form';
import Income from './Homepage/Income/Income';
import FixExpense from './Homepage/FixExpense/FixExpense';
import VarExpense from './Homepage/VarExpense/VarExepense';

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
const StackList = createStackNavigator();
const StackVar = createStackNavigator();
// const StackIncome = createStackNavigator();
// const StackFixExpense = createStackNavigator();
// const StackVarExpense = createStackNavigator();

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

const ListScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title='Liste des dépenses' navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Liste')}
                >
                    <List navigation={navigation} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const ListStack = () => {
    return(
        <StackList.Navigator initialRouteName='Liste'>
            <StackList.Screen name='Liste' component={ListScreen} options={navOptionHandler} />
        </StackList.Navigator>
    )
}

// const VarIncomeScreen = ({navigation}) => {
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <CustomHeader title='Revenus variables' navigation={navigation} />
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('Revenus-variables')}
//                 >
//                     <Income />
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     )
// }
// const VarIncomeStack = () => {
//     return(
//         <StackIncome.Navigator initialRouteName='Revenus-variables'>
//             <StackIncome.Screen name='Revenus-variables' component={VarIncomeScreen} options={navOptionHandler} />
//         </StackIncome.Navigator>
//     )
// }

const VarScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title='Transactions variables' navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Transactions-variables')}
                >
                    <Form />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const VarStack = () => {
    return(
        <StackVar.Navigator initialRouteName='Transactions-variables'>
            <StackVar.Screen name='Transactions-variables' component={VarScreen} options={navOptionHandler} />
        </StackVar.Navigator>
    )
}

const Navigation = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
        
                    if (route.name === 'Accueil') {
                        iconName = focused
                        ? require('../../assets/icons/home.png')
                        : require('../../assets/icons/home-black.png');
                    } else if (route.name === 'Liste') {
                        iconName = focused
                        ? require('../../assets/icons/liste.png')
                        : require('../../assets/icons/liste-black.png');
                    } else if (route.name === 'Transactions var.') {
                        iconName = focused
                        ? require('../../assets/icons/revenus.png')
                        : require('../../assets/icons/revenus-black.png');
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
            <Tab.Screen name="Liste" component={ListStack} />
            <Tab.Screen name="Transactions var." component={VarStack} />
        </Tab.Navigator>
    );
}

export default Navigation;