import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"
import {createBottonTabNavigator} from "@react-navigation/bottom-tabs"
import ListTab from './components/ListTab';
import ImageTab from './components/ImageTab';
import VideoTab from './components/VideoTab';
import NamesTab from './components/NamesTab';

/*import ListTab from './components/ListTab';
import ImageTab from './components/ImageTab';
import VideoTab from './components/VideoTab';
*/
const AuthStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode = {'none'}>

        <AuthStack.Screen name = "ListTab" component = {ListTab}  />
        <AuthStack.Screen name = "NamesTab" component = {NamesTab} />
        <AuthStack.Screen name = "ImageTab" component = {ImageTab} />
        <AuthStack.Screen name = "VideoTab" component = {VideoTab} />
      
        
        </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
