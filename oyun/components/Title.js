import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({children}) {
  return (
 
      <Text style={styles.Title}>{children}</Text>
   
  )
}

const styles = StyleSheet.create({
    Title:{
        borderWidth:2,
        borderColor:"red",
        textAlign:"center",
        padding:15,
        marginBottom:15,
        borderRadius:20,
        color:"white",
        fontSize:25
    }
})