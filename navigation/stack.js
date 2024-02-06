import { createStackNavigator } from '@react-navigation/stack';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/core';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';

import JourneyScreen from '../screens/journey/journey-screen';
import ExerciseScreen from '../screens/journey/exercise-screen';
import { HomeTabs } from './tabs';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={()=> navOptions(navigation)}
    >
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}

export const JourneyStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={()=> navOptions(navigation)}
    >
      <Stack.Screen name="Journey" component={JourneyScreen} />
      <Stack.Screen name="Exercise" component={ExerciseScreen} />
    </Stack.Navigator>
  );
}