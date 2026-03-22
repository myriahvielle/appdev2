import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function FooterComponent({ path, setPage }) {
  return (
    <View style={styles.container}>
      <ButtonComponent text={path === 'signup' ? 'Login' : 'Signup'} />

      <View style={styles.bottomContent}>
        <Text>
          {path === 'signup'
            ? "Already have an account?"
            : "Don't have an account?"}
        </Text>

        <TouchableOpacity
          onPress={
            () => setPage(path)
          }
          
        >
          <Text style={{color: '#2a3796', textDecorationLine: 'underline'}}>
            {path === 'signup' ? 'Login' : 'Signup'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'flex-start',
        alignContent: 'space-evenly',
        marginTop:10
    },
    bottomContent:{
        flexDirection: 'row',
        gap: 5,
        marginTop:10
    },
    
})