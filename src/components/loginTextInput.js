import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Space from "../utils/space";

export default LoginTextInput = ({ value, setValue, placeholder, secure }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="white"
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    width: Space.widthDimension - 60,
    maxWidth: 500,
    height: 50,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
