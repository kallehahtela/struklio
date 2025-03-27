import { Tabs } from "expo-router";
import * as SystemUI from 'expo-system-ui';
import { useEffect } from "react";
import { StyleSheet } from "react-native";

export default function RootLayout() {
    useEffect(() => {
        SystemUI.setBackgroundColorAsync('white');
    }, []);

    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: () => null }} />
            <Tabs.Screen name="tasks" options={{ title: "Tasks", tabBarIcon: () => null }} />
            <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: () => null }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});