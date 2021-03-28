import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Space = {
  widthDimension: width,
  heightDimension: height,
  Normal: 8,
  Big: 16,
};

export default Space;
