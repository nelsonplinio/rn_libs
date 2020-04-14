import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FingerprintScanner from 'react-native-fingerprint-scanner';

// import { Container } from './styles';

export default function Fingerprint() {

  function authCurrent() {
    FingerprintScanner
    .authenticate({ description: 'Fazer login com sua biometria' })
    .then(() => {
      Alert.alert('Login com sucesso!!!!')
    });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={authCurrent}>
        <Icon name="fingerprint" size={85} />
      </TouchableOpacity>
      <Text style={styles.text}>Clique no fingerprint</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    marginTop: 8,

  },

  textSuccess: {

    fontSize: 22,
    color: '#4f4',
    marginTop: 8,
  }
})