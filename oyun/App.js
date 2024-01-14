import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
  }

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
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
