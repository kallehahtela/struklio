import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// Own Components
import InputField from "../../components/InputField";
import SocialAuthBtn from "../../components/SocialAuthBtn";
import TouchableBtn from "../../components/TouchableBtn";

export default function LoginScreen() {
    // navigation
    const router = useRouter();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.outerContainer}>
                <View style={styles.container}>
                    {/* Hero text for login */}
                    <View style={styles.heroContainer}>
                        <Text style={styles.heroText}>Welcome back, legend. Time to build something pretty and functional, yeah?</Text>
                    </View>

                    {/* Input Fields for login with email and password */}
                    <View style={styles.inputContainer}>
                        <InputField 
                            placeholder="email"
                            placeholderTextColor="black"

                        />
                        <InputField 
                            placeholder="password"
                            placeholderTextColor="black"
                        />

                    </View>
                    
                    {/* Forgot password btn UI */}
                    <View style={{ position: 'relative', left: 100, marginBottom: 10, marginHorizontal: 10}}>
                        <TouchableOpacity
                            onPress={() => router.navigate("/forgotpass")}
                        >
                            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Login Button UI for now */}
                    <View style={styles.loginBtn}>
                        <TouchableBtn 
                            text="Login"
                            onPress={() => console.log('Login Pressed')}
                        />
                    </View>
                    
                    {/* Social authentication UI for apple, google, linkedin: actual logic later */}
                    <View style={styles.socialAuthContainer}>
                        <SocialAuthBtn 
                            iconName="logo-apple"
                            color="black"
                            size={24}
                        />
                        <SocialAuthBtn 
                            iconName="logo-google"
                            color="black"
                            size={24}
                        />
                        <SocialAuthBtn 
                            iconName="logo-linkedin"
                            color="black"
                            size={24}
                        />
                    </View>

                    {/* Need an account? sign up button */}
                    <View style={styles.newUserContainer}>
                        <Text style={styles.needAccountText}>I don't have an account?</Text>
                        <TouchableOpacity
                            onPress={() => router.navigate("/signup")}
                        >
                            <Text style={styles.signUpBtn}>Sign up</Text>
                        </TouchableOpacity>
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
        marginHorizontal: 30,
    },
    heroText: {
        fontFamily: 'UrbanistSemiBold',
        fontSize: 17,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
    },
    forgotPasswordText: {
        fontFamily: 'UrbanistSemiBold',
        color: '#3772FF',
    },
    loginBtn: {
        marginTop: 20,
        width: '100%',
        fontFamily: 'UrbanistSemiBold',
    },
    socialAuthContainer: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 20,
    },
    newUserContainer: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 5,
    },
    needAccountText: {
        fontFamily: 'UrbanistSemiBold',
    },
    signUpBtn: {
        fontFamily: 'UrbanistSemiBold',
        color: '#3772FF'
    },
    plainText: {
        fontFamily: 'UrbanistRegular',
    },
    semiboldText: {
        textAlign: 'center',
        fontFamily: 'UrbanistSemiBold',
        fontSize: 17,
    },
    boldText: {
        fontFamily: 'UrbanistBold',
    }
});