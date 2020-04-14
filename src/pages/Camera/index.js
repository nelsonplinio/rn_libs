import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';

import { RNCamera } from 'react-native-camera';
import Share from 'react-native-share';
// import { Container } from './styles';

export default function Camera() {
  const camera = useRef(null);
  const [images, setImages] = useState([])
  async function handleTakePic() {
    const image = await camera.current.takePictureAsync({
      base64: true,
      quality: 0.7
    });
    console.warn(image);
    setImages([image, ...images])
  }

  function handleShared(image) {
    
      Share.open({
        url: image.uri,
      })
    
  }
  return (
    <View style={styles.container}>
      <RNCamera ref={camera}  
      style={styles.camera}/>
      <FlatList style={styles.imagesList} 
        data={images}
        keyExtractor={({ base64 }) => base64}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleShared(item)}>
            <Image source={{uri: item.uri}} style={styles.image} />
          </TouchableOpacity>
        )}
        horizontal
      />
      <TouchableOpacity style={styles.button} onPress={handleTakePic}>
        <Text style={styles.buttonText}>Tirar foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera:{
    flex:10
  },
  button:{
    flex: 1,
    alignSelf: 'stretch',
    justifyContent:'center'
  },
  buttonText:{
    alignSelf: 'stretch',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 25,
    textAlign: "center"
  },
  image:{
    height: 55,
    width: 55,
    marginLeft: 8,
    borderRadius: 8,
  }
})