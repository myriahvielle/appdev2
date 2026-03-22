import { Button, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextInputComponent from './TextInputComponent'
import { Ionicons } from '@expo/vector-icons';
import ButtonComponent from './ButtonComponent';
import FooterComponent from './FooterComponent';
import login from '../../assets/login.png'

export default function Login({setPage, styles}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image source={login} style={styles.image}/>
        <Text style={styles.header}>Log In</Text>
      </View>

      {/* Inputs */}
      <View style={styles.inputContainer}>

        <TextInputComponent type={'email'} icon={<Ionicons name="mail-outline" size={22} color="gray" />}/>

        <TextInputComponent type={'password'} icon={<Ionicons name="lock-closed-outline" size={22} color="gray" />}/>

      </View>

      {/* footer */}
      <FooterComponent path={'signup'} setPage={setPage}/>
    </View>
  )
}