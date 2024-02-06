import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {exerciseID} = route.params


    const {eventId, title, description} = route.params

    // title for event item page
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: "Exercises",
            // back-button
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    onPress={()=>{navigation.goBack()
                        }}
                />
            ),
        });
    }, [])

    return (
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>Exercise Screen {eventId}</Text>
            <Text style={{fontSize: 20}}>{title}</Text>
            <Text style={{fontSize: 20}}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default ExerciseScreen;