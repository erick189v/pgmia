import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native"
 
export const navOptions = (nav) => {
    return{
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'black'
        },
        // hamburger menu
        headerLeft: () =>(
            <Ionicons
            name= "menu"
            size= {32}
            color= "white"
            onPress={()=>nav.toggleDrawer()}
            />
        ),
        headerRight: () =>(
            <Text style={{color:'white', fontSize: 20, paddingLeft:5}}>pro/pic</Text>
        )
    }

}