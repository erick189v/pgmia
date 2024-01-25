import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
     <Text>hello</Text> 
     <Text>Platform: {Platform.OS === 'ios' ? 'ios' : 'android'}</Text>
    </SafeAreaView>
  );
}


