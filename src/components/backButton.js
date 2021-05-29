import React from "react";
import BackArrow from "../assets/images/back-arrow.png";
import { TouchableOpacity, Image } from "react-native";

export default BackButton = ({ navigation, color = "white" }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        width: 50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={BackArrow}
        resizeMode="contain"
        style={{ flexGrow: 1, tintColor: color }}
      ></Image>
    </TouchableOpacity>
  );
};
