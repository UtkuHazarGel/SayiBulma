import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [gameIsOver, setGameIsOver] = useState(true);
  const [userNumber, setUserNumber] = useState(null);
  const [guessCount, setGuessCount] = useState(0);
  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberofGuess) {
    setGameIsOver(true);
    setGuessCount(numberofGuess);
  }
  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen userNumber={userNumber} roundsNumber={guessCount-1} />
    );
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,100,250,0.8)", "transparent"]}
    >
      {screen}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  backImage: {
    opacity: 0.0,
  },
});
