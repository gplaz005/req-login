import React from 'react'
import { View, Text, StyleSheet , Button, Image} from 'react-native'

const ImageTab = ({navigation}) => {
    
    return(
        <View style = {styles.container}>
            <Image
            style = {styles.imageLook}
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
    imageLook:{
        
  borderRadius: 10,
  padding: 10,
  width: 200,
  height: 200
    }
  });