import 'react-native-gesture-handler';
import React from 'react';
import PushNotification  from 'react-native-push-notification';

import Routes from './routes';
export default function App() {

  PushNotification.configure({
    onNotification: (payload) => {
      console.log('onNotification', payload);
    },
    onRegister: (token) => {
      console.log('onRegister', token)
    },
    requestPermissions: true,
  })
  
  return (
    <Routes />
  );
}
