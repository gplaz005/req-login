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
                <Text >{itemData.item.title}</Text>
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
    }
})
