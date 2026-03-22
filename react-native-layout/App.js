import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Todo from './src/screens/Todo';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30,
    backgroundColor: '#d3d3d3'
  },
  headerContainer:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-around'
  },
  inputContainer:{
    flex: 1,
    alignItems:'flex-end',
    justifyContent: 'flex-end'
  },
  image:{
    width: '200',
    height: '200'
  },
  header:{
    fontSize:50
  }
})


export default function App() {
 
  return (
    <>
      <Todo/>
    </>
  );
} 