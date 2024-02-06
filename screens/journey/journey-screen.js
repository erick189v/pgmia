import { useNavigation } from "@react-navigation/core";
import { View, Text, StyleSheet, Button } from "react-native";


const JourneyScreen = () => {
    // event navigation.
    const navigation = useNavigation()
    return (
        <View>
           <Text>Journey Screen</Text> 
           <Button title="Exercises" onPress={()=>navigation.navigate('Exercise', {exerciseId: 1})} />
        </View>
    )
}

export default JourneyScreen;