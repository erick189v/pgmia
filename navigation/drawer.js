import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './stack';
import { JourneyStack } from './stack';
import { Image, View, SafeAreaView } from 'react-native';


const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator 
    drawerContent={(props)=> {
        return (
            <SafeAreaView style={{flex:1, paddingTop: 20, backgroundColor: 'white'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: 140}}>
                    <Image
                        style={{width: 100, resizeMode: 'contain'}}
                        source={require("../assets/images/powerhouse/logo.jpg")}
                    />
                </View>
                <DrawerItemList {...props}/>
            </SafeAreaView>
            );
        }} 
            screenOptions={{
            headerShown: false,
        }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        title: 'Home'
      }} />
      <Drawer.Screen name="JourneyStack" component={JourneyStack} options={{
        title: 'Journey'
      }} />
    </Drawer.Navigator>
  );
}