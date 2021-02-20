import React from 'react'
import { View, Text, StyleSheet , Button} from 'react-native'

const ListTab = ({navigation}) => {
    
    return(
        <View style ={styles.container}>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})