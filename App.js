// modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// components
import Navigation from './components/Navigation/Navigation';

export default function App() {
    let [fontsLoaded] = useFonts({
        'Rubik-Bold': require('./assets/fonts/Rubik/Rubik-Bold.ttf'),
        'Rubik-BoldItalic': require('./assets/fonts/Rubik/Rubik-BoldItalic.ttf'),
        'Rubik-Light': require('./assets/fonts/Rubik/Rubik-Light.ttf'),
        'Rubik-LightItalic': require('./assets/fonts/Rubik/Rubik-LightItalic.ttf'),
        'Rubik-Medium': require('./assets/fonts/Rubik/Rubik-Medium.ttf'),
        'Rubik-MediumItalic': require('./assets/fonts/Rubik/Rubik-MediumItalic.ttf'),
        'Rubik-Regular': require('./assets/fonts/Rubik/Rubik-Regular.ttf'),
        'Rubik-RegularItalic': require('./assets/fonts/Rubik/Rubik-Italic.ttf'),
    });

    if(!fontsLoaded) {
        return <SafeAreaProvider><AppLoading /></SafeAreaProvider>;
    } else {
        return (
            <SafeAreaProvider>
                <NavigationContainer style={styles.container}>
                    <Navigation />
                    <StatusBar />
                </NavigationContainer>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
