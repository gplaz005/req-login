import React  ,{useState}from 'react'
import { View, Text, StyleSheet , Button, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native'
import {Formik} from 'formik'; 
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListTab = ({navigation}) => {

 // start of getUser function   
const getUser = async (userEmail, userPassword) => {
    const res = await fetch("https://reqres.in/api/login",{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",                                                                       
        "Access-Control-Origin": "*"
      },
      body: JSON.stringify({
        "email": userEmail,
      "password": userPassword  
      })
    })  // end of fetch function
    .then(function(response){ 
    return response.json(); 
      })
    .then(function(data){ 
    if(data.token){
        navigation.navigate('NamesTab', {say : "sucesfull"})
       }
       else{
         console.log(data.error)
         navigation.navigate('NamesTab', {say : data.error})
       }
    });
  }; // end of getUser function


    
  return(
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
<View style ={styles.container}>
      
      <View>
        <Text style = {styles.title}>PROKEEP TEST</Text>
        <Text style = {styles.subTitle}>by G.P</Text>
      </View>

       
    <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit = {values => getUser(values.email, values.password)}
    validationSchema = {
                Yup.object({
                    email: Yup.string()
                    .trim()
                    .email('invalid email')
                    .required('please enter email'),
                    password: Yup.string()
                    .required('please enter password')
                })
            }

    >
     {({ handleChange, errors , touched, handleBlur, handleSubmit, values }) => (
       <View>
           
        <View style ={styles.input}>

          <TextInput
           placeholder = {"email"}
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
          />

          <View style = {{marginTop: 15, height:20,}}>
          {errors.email && touched.email?
          <Text style = {{color: '#DC143C'}}>invalid email format</Text> : 
          null}
          </View>

        </View>
         
         
         <View style ={styles.input}>

          <TextInput
          placeholder = {'password'}
          secureTextEntry = {true}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          />

          <View style = {{height:20, marginTop:16}}>
          {errors.password && touched.password?
          <Text style = {{color: '#DC143C'}}>invalid password format</Text> :
           null}
          </View>
         
        </View>
         

         <Button color = '#0000CD' onPress={handleSubmit} title="Log In" testID = "Button" />
       </View>
     )}
   </Formik>
            
  </View>
  </TouchableWithoutFeedback>
    )
}

export default ListTab

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B0E0E6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize:40, 
      fontWeight: 'bold', 
      color: 'white'
    },
    subTitle:{
      color: 'white',
      paddingBottom: 60
    },
    input: {
        height: 40,
        width: 240,
        borderWidth: 1,
        padding: 10,
        marginBottom: 40,
        borderRadius: 20,
      },
})