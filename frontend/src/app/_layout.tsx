import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import HomeScreen from ".";

export default function RootLayout() {
    return (
        <SafeAreaView>
            <StatusBar />
            <HomeScreen />
        </SafeAreaView>
    );
};