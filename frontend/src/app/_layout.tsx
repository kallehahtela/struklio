import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import HomeScreen from "./index";
import * as SystemUI from 'expo-system-ui';

export default function RootLayout() {
    SystemUI.setBackgroundColorAsync('white');

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar />
            <View>
                <HomeScreen />
            </View>
        </SafeAreaView>
    );
};