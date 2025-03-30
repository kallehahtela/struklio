import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import InputField from "../../components/InputField";
import TouchableBtn from "../../components/TouchableBtn";
import { useRouter } from "expo-router";

export default function ForgotPass() {
    const router = useRouter();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.outerContainer}>
                <View style={styles.container}>

                    {/* Hero container UI & Text */}
                    <View style={styles.heroContainer}>
                        <Text style={styles.heroText}>Forgot password</Text>
                    </View>

                    {/* Input container UI */}
                    <View style={styles.inputContainer}>
                        <InputField 
                            placeholder="email"
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={styles.forgetpassBtn}>
                        <TouchableBtn 
                            text="Request"
                            onPress={() => router.navigate("/login")} // actual logic later, with correct navigation etc.
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
    heroContainer: {
        marginBottom: 30,
    },
    heroText: {
        fontFamily: 'UrbanistSemiBold',
        fontSize: 17,
    },
    inputContainer: {
        width: '100%'
    },
    forgetpassBtn: {
        marginTop: 30,
        width: '100%',
        fontFamily: 'UrbanistSemiBold'
    }
});