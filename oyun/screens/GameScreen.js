import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import ComputerNumber from "../components/ComputerNumber";
import CustomButton from "../components/CustomButton";


let minNumber = 1;
let maxNumber = 100;
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

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Bence yanlış gidiyorsun",
        "Diğer seçeneği denemeye ne dersin?",
        [{ text: "Tamam", style: "cancel" }]
      );
      return;
    }
 
    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View style={styles.container}>
      <Title> Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View>
        <Text>Altında mı? Üstüne mi?</Text>
        <View>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </CustomButton>
        </View>
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
