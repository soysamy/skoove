import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

// HomeStack to store the main screens
export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        gestureDirection: 'horizontal',
        headerShown: true,
      }}>
      <Stack.Screen name="HomePage" component={HomeScreen} />
      />
    </Stack.Navigator>
  );
}
