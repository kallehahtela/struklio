import { Slot, SplashScreen, Stack } from "expo-router";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "UrbanistRegular": require("../../assets/fonts/Urbanist-Regular.ttf"),
        "UrbanistSemiBold": require("../../assets/fonts/Urbanist-SemiBold.ttf"),
        "UrbanistBold": require("../../assets/fonts/Urbanist-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <Slot />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});