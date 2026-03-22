import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'
import { Ionicons } from '@expo/vector-icons';
import FooterComponent from '../components/FooterComponent';

export default function Signup({setPage, styles}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Signup</Text>
      </View>
    
      {/* Inputs */}
      <View style={styles.inputContainer}>
        <TextInputComponent type={'email'} icon={<Ionicons name="mail-outline" size={22} color="gray" />}/>

        <TextInputComponent type={'password'} icon={<Ionicons name="lock-closed-outline" size={22} color="gray" />}/>

        <TextInputComponent type={'confirm_password'} icon={<Ionicons name="shield-checkmark-outline" size={22} color="gray" />}/>
      </View>
    
      {/* footer */}
      <FooterComponent path={'login'} setPage={setPage}/>
    </View>
  )
}