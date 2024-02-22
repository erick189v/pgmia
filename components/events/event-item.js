import { useNavigation } from "@react-navigation/core";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const EventItem = ({id, name, description, qrCode}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Event", {eventId: id, name, description})}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Image
                key={qrCode}
                style={{width: 100, height: 100}}
                source={{uri: qrCode}}
                onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})

export default EventItem;