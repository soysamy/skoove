import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="HomePage"
              screenOptions={{
                gestureDirection: 'horizontal',
                headerShown: false,
              }}>
              <Stack.Screen name="HomePage" component={HomeScreen} />
              <Stack.Screen name="PlayerPage" component={PlayerScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
