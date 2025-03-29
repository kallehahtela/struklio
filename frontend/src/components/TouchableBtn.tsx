import { View, TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Props {
    text: string;
    onPress(): void;
}

export default function TouchableBtn({ text, onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#3772FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        padding: 10,
        marginHorizontal: 30,
        marginBottom: 20,
    },
    btnText: {
        color: 'white',
        fontFamily: 'UrbanistBold',
        fontSize: 16,
    }
});