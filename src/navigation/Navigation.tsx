
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export const Navigation = () =>  {
  return (
    <Stack.Navigator
        screenOptions={{
            //no tenga la barra de titulo de defecto
            headerShown: false, 
            cardStyle: {
                backgroundColor: 'white',
            }
        }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}