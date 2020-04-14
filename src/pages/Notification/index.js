import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import PushNotification from 'react-native-push-notification'

export default function Notification() {
  const [message, setMessage] = useState('');

  function handleSendNotification() {
    PushNotification.localNotification({
      title: 'Mensagem enviada pelo app',
      message,
      priority: 'high',

    })
    setMessage('')
  }

  return (
    <View style={styles.container}>
      <TextInput value={message} onChangeText={setMessage} style={styles.input} placeholder="Mensagem" />
      <TouchableOpacity onPress={handleSendNotification} style={styles.button} >
        <Text style={styles.textButton}>Gerar notificação</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignSelf: 'stretch',
    borderColor: '#999',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#7159c1',
    height: 50,
    width: 250,
    borderRadius: 25,
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16
  },
  textButton: {
    color: '#fff',
    alignSelf: 'stretch',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
})