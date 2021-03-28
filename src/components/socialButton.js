import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import Space from "../utils/space";
import FacebookLogo from "../assets/images/facebook-logo.png";
import AppleLogo from "../assets/images/apple-logo.png";
import GoogleLogo from "../assets/images/google-logo.png";

import LinearGradient from "react-native-linear-gradient";
import SocialLogin from "../utils/socialButtons";

export default SocialButton = ({ type, action }) => {
  let logoSource = FacebookLogo;
  let logoBackground = ["#313BA5", "black"];
  if (type === SocialLogin.Google) {
    logoSource = GoogleLogo;
    logoBackground = ["white", "white"];
  } else if (type === SocialLogin.Apple) {
    logoSource = AppleLogo;
    logoBackground = ["black", "black"];
  }
  return (
    <TouchableOpacity
      style={{
        height: 70,
        width: 70,
        marginHorizontal: Space.Normal,
      }}
      onPress={() => {
        action({ type: "sign in with facebook" });
      }}
    >
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
        }}
        colors={logoBackground}
      >
        <Image
          source={logoSource}
          resizeMode="contain"
          style={{ height: 40, width: 40 }}
        />
      </LinearGradient>
    </TouchableOpacity>
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
