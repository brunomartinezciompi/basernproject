import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Space from "../utils/space";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUpVericationForm = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["black", "#313BA5"]}
    >
      <Text style={styles.title}>Sign Up Verification Phone (TODO)</Text>
    </LinearGradient>
  );
};

export default function _({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: "black" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#313BA5" }}>
        <KeyboardAwareScrollView
          bounces={false}
          style={{ backgroundColor: "transparent" }}
        >
          <SignUpVericationForm navigation={navigation} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: Space.Big,
    marginTop: Space.Big * 4,
    fontSize: 36,
    fontWeight: "700",
    color: "white",
    alignSelf: "center",
  },
  container: {
    flex: 1,
  }
});
