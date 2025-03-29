import { View, TextInput, StyleSheet } from "react-native";

interface Props {
    placeholder: string;
    placeholderTextColor: string
}

export default function InputField({ placeholder, placeholderTextColor }: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        marginHorizontal: 30,
        padding: 5,
        marginBottom: 10,
    },
    text: {
        fontFamily: 'UrbanistRegular',
    }
});