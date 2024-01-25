import { useNavigation } from "@react-navigation/core";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
    // event navigation.
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <Text>This is the Home Screen</Text>
            <Button title="Events" onPress={()=>navigation.navigate('Event')} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default HomeScreen;