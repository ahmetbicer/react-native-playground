import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  Chat,
  PlaygroundList,
  Swiper,
  TernaryOperator,
  TooltipContainer,
} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerBackVisible: true}}>
          <Stack.Screen name="PlaygroundList" component={PlaygroundList} />
          <Stack.Screen name="Swiper" component={Swiper} />
          <Stack.Screen name="TernaryOperator" component={TernaryOperator} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Tooltip" component={TooltipContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
