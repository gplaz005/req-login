import React from 'react'
import { View, Text, StyleSheet , Button} from 'react-native'

const ListTab = ({navigation}) => {
    
    return(
        <View>
        <Button
        title="Names Tab"
        onPress={() => navigation.navigate('NamesTab')}
        />

        <Button
        title="Image Tab"
        onPress={() => navigation.navigate('ImageTab')}
        />

        <Button
        title="Video Tab"
        onPress={() => navigation.navigate('VideoTab')}
        />

        

        
        </View>
    )
}

export default ListTab