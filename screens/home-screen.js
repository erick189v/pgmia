import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/events/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Failed to fetch events:", error);
        }
    };
    // event navigation.
    return (
        <View style={styles.screen}>
            <EventList data={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default HomeScreen;