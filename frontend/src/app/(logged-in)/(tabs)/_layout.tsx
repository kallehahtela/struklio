import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function TabsNavigator() {
    <Tabs>
        <Tabs.Screen 
            name="index"
            options={{
                title: 'Feed',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons 
                        name="home"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
        <Tabs.Screen 
            name="feed"
            options={{
                title: 'Feed',
                tabBarIcon: ({ size, color }) => (
                    <Feather 
                        name="activity"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
    </Tabs>
}