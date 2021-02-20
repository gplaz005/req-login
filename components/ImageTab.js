import React from 'react'
import { View, Text, StyleSheet , Button} from 'react-native'

const ImageTab = ({navigation}) => {
    
    return(
        <View>
            <Button
        title="Go to Video Tab"
        onPress={() => navigation.navigate('VideoTab')}
      />
        
        </View>
    )
}

export default ImageTab