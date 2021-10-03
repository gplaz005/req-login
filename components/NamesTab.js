import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet , Button, FlatList} from 'react-native'

const NamesTab = ({route , navigation}) => {

   const  result = route.params.say;
   console.log(result)

    
    return(
        <View style = {styles.container}>
            <View style = {{marginTop: 40}}>
           <Text>{result}</Text>
            </View>          
        </View>
    )
}



export default NamesTab

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listItem:{
        backgroundColor: '#66c2ff',
        padding: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius:20,
        width: 300,
        alignItems: 'center',
        fontSize: 50
      },
})
