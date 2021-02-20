import React from 'react'
import { View, Text, StyleSheet , Button, Image} from 'react-native'

const ImageTab = ({navigation}) => {
    
    return(
        <View style = {styles.container}>
            <Image
            style={{ width: 100, height: 100, marginBottom: 15 }}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            />
        </View>
    )
}

export default ImageTab


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });