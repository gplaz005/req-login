import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet , Button, FlatList} from 'react-native'

const NamesTab = ({route , navigation}) => {

   const  result = route.params.say;

    const [fail, setFail] = useState(false)
    
    return(
        <View style = {styles.container}>
                   
            <View>
               { result == 'sucesfull' ?
                <View>
                <Text style = {styles.title}> Login succesfull</Text> 
                <Text style = {styles.title}> Access granted</Text> 

                </View>
               : 
               <View>
                <Text style = {styles.result}>{result}</Text>
                <Text style = {{textAlign: 'center',color: '#DC143C'}}>Try Again</Text>
               <Button color = '#0000CD' onPress={() => navigation.navigate('ListTab')} title="Log In" />
               </View>
            }
            </View> 
        </View>
    )
}



export default NamesTab

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B0E0E6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        textAlign: 'center', 
        fontSize: 20, 
        color: 'green'
    },
    result:{
        textAlign: 'center', 
        fontSize: 20, 
        color: '#DC143C'
    }
})
