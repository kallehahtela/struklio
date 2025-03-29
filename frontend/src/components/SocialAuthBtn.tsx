import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
type IoniconsGlyphs = keyof typeof Ionicons.glyphMap; // Dynamically infer valid icon names

interface Props {
    iconName: IoniconsGlyphs;
    color: string;
    size: number;
};

export default function SocialAuthBtn({ iconName, color, size}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons 
                    name={iconName}
                    color={color}
                    size={size}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
    }
});