import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function TextInputComponent({type, icon}) {
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
            placeholder={`Enter your ${type == 'confirm_password' ? 'confirm password': type}`}
            keyboardType="email-address"
            secureTextEntry={type == 'password' ||type == 'confirm_password'}
            style={styles.textInput}
          />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#726a72',
    backgroundColor: '#ddd',
    borderRadius: 10,
    margin: 4

  },

  textInput: {
    flex: 1,
    fontSize: 16,
  },
});