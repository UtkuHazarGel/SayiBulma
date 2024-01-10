import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CustomButton({ children,onPress}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerText, styles.pressed]
            : styles.buttonInnerText
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
  },
  buttonInnerText: {
    paddingVertical: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
