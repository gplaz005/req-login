import React  ,{useState}from 'react'
import { View, Text, StyleSheet , Button, TextInput} from 'react-native'
import {Formik} from 'formik'; 
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListTab = ({navigation}) => {

    const [text, onChangeText] = useState('');

    
    return(
        <View style ={styles.container}>
       
       <Formik
     initialValues={{ email: '', password: '' }}
     onSubmit={values => console.log(values)}
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
           {errors.email && touched.email? <Text>invalid email format</Text> : null}
            <View style ={styles.input}>
            <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         </View>

         
         {errors.password && touched.password? <Text>invalid password format</Text> : null}
         <View style ={styles.input}>
            <TextInput
            secureTextEntry = {true}
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
         />
         </View>
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
            

        
        <Button
        title="Names Tab"
        onPress={() => navigation.navigate('NamesTab')}
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
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        padding: 10,
        marginBottom: 40
      },
})