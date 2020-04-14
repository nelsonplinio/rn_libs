import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const list = [
  {
    label: 'Camera',
    path: 'Camera'
  },
  {
    label: 'Notification',
    path: 'Notification'
  },
  {
    label: 'Fingerprint',
    path: 'Fingerprint'
  },
]
export default function Main() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList 
      data={list}
      style={styles.list}
      keyExtractor={({ path }) => path}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.path)}>
          <Text style={styles.itemText}>{item.label}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 22,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    alignSelf: 'stretch'
  }
})