import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ComputerNumber from "../components/ComputerNumber";
import CustomButton from "../components/CustomButton";
import { AntDesign } from "@expo/vector-icons";
import ComputerGuess from "../components/ComputerGuess";

let minNumber = 1;
let maxNumber = 100;
export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessCount, setGuessCount] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessCount.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function generateNumber(min, max, exlude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exlude) {
      return randomNumber(min, max, exlude);
    } else {
      return randomNumber;
    }
  }
  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

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
    setGuessCount((prevGuess) => [newRandomNumber, ...prevGuess]);
  }
  return (
    <View style={styles.container}>
      <Title> Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında mı? Üstüne mi?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minus" size={24} color="white" />
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
            <AntDesign name="plus" size={24} color="white" />
          </CustomButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessCount}
          keyExtractor={(itemData)=>itemData}
          renderItem={(itemData) => (
            <ComputerGuess
              roundNumber={guessCount.length - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "orange",
    padding: 16,
    marginTop: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 15,
  },
  listContainer:{
    flex:1,
    marginTop:10
  }
});
