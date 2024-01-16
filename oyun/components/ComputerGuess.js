import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerGuess({roundNumber,guess}) {
  return (
    <View style={styles.guess}>
      <Text>{roundNumber}. Tahmin </Text>
      <Text>{guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    guess:{
        flexDirection:"row"
    }
})