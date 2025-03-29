import { View, Text, StyleSheet } from "react-native";
import TouchableBtn from "../components/TouchableBtn";
import { useRouter } from "expo-router";

export default function EntryScreen() {
    const router = useRouter();

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to Struklio</Text>
                <Text style={styles.text}>Native full-stack no-code builder</Text>
            </View>

            <TouchableBtn 
                text="Continue"
                onPress={() => router.navigate("/login")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'UrbanistRegular',
        fontSize: 17,
    },
});