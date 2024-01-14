import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";

export default function GameScreen({ userNumber }) {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  function generateNumber(min, max, exlude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exlude) {
      return randomNumber(min, max, exlude);
    } else {
      return randomNumber;
    }
  }
  return (
    <View style={styles.container}>
      <Title> Bilgisayar Tahmini</Title>
      <Text>{currentGuess}</Text>
      <View>
        <Text>Altında mı? Üstüne mi?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
