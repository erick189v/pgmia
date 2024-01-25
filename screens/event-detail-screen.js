import { View, Text, StyleSheet } from "react-native";

const EventDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default EventDetailScreen;