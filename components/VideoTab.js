import React from 'react'
import { View, Text, StyleSheet , Button} from 'react-native'

const VideoTab = ({navigation}) => {
    
    return(
        <View>
            <Button
        title="Go to ImageTab"
        onPress={() => navigation.navigate('ImageTab')}
      />
        
        </View>
    )
}

export default VideoTab