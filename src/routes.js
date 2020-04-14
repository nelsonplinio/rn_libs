import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Camera from './pages/Camera';
import Notification from './pages/Notification';
import Fingerprint from './pages/Fingerprint';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='Notification' component={Notification}/>
        <Stack.Screen name='Fingerprint' component={Fingerprint}/>
        <Stack.Screen name='Camera' component={Camera} options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.3)'
          }
        }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}