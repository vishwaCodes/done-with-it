import { LinearGradient } from "expo";
import React from "react";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Pressed!");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color="black"
        title="Click me"
        onPress={() =>
          Alert.prompt("My Title", "My message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "lavender" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
