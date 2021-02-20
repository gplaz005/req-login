import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet , Button, FlatList} from 'react-native'

const NamesTab = ({navigation}) => {

    const [movies ,setMovies] = useState()
    
    useEffect(() =>{
        getData();
        },[])

    

    const getData = async() =>{
        try{
            let moviesArray = []
            const url = 'https://reactnative.dev/movies.json'
            const response = await fetch(url);
            let movieData = await response.json();
            let moviesList = JSON.stringify(movieData.movies)
            
            //console.log(movieData.movies)
            movieData.movies.map((k) =>{
                moviesArray = [...moviesArray,k]
            })
            setMovies(movieData.movies)
  
            
        }catch(error){
            console.log("error")
        }    
    }

    
    return(
        <View style = {styles.container}>
            
            <FlatList
             
            data = {movies}
            renderItem ={itemData => (
                <View style ={styles.listItem}>
                <Text >{itemData.item.title}</Text>
                </View>
                )}
            keyExtractor = {(itemData,index) =>itemData.title}
            />
           
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
