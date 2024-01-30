import { useNavigation } from "@react-navigation/core";
import { View, Text, StyleSheet, Button } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
    // event navigation.
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <EventList />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default HomeScreen;