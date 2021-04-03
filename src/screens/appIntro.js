import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import IntroLottieAnimationFirst from "../assets/lottie/appIntroLottie1.json";
import IntroLottieAnimationSecond from "../assets/lottie/appIntroLottie2.json";
import IntroLottieAnimationThird from "../assets/lottie/appIntroLottie3.json";

import Space from "../utils/space";

const width = Space.widthDimension,
  height = Space.heightDimension;

const IntroSlideItem = ({ title, subtitle, animation, orientation }) => {
  const LabelsComponents = () => {
    return (
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text style={styles.IntroSlideItemTitle}>{title}</Text>
        <Text style={styles.IntroSlideItemSubtitle}>{subtitle}</Text>
      </View>
    );
  };

  const ImageComponent = ({ animation, orientation }) => {
    return (
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: orientation === "top" ? "flex-start" : "center",
        }}
      >
        <View style={{ height: "90%", aspectRatio: 1 }}>
          <LottieView source={animation} autoPlay loop />
        </View>
      </View>
    );
  };

  return (
    <View style={{ width, flex: 1, backgroundColor: "white" }}>
      {orientation === "top" ? <LabelsComponents /> : null}
      <ImageComponent animation={animation} orientation={orientation} />
      {orientation === "top" ? null : <LabelsComponents />}
    </View>
  );
};

const PaginationView = ({}) => {
  return (
    <View
      style={{
        height: 90,
        width,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 40,
          width: 100,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginLeft: Space.Big,
        }}
      >
        <View
          style={{
            backgroundColor: "#D4D6DA",
            height: 10,
            width: 10,
            borderRadius: 5,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#D4D6DA",
            height: 10,
            width: 10,
            borderRadius: 5,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#3377FF",
            height: 10,
            width: 10,
            borderRadius: 5,
          }}
        ></View>
      </View>

      <TouchableOpacity
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
          backgroundColor: "#3377FF",
          marginRight: Space.Big,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 14, fontWeight: "700" }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const AppIntro = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <IntroSlideItem
            orientation={"top"}
            title={"Listen to the greatests"}
            subtitle={
              "Now you can listen to the best music available on your device"
            }
            animation={IntroLottieAnimationFirst}
          />
          <IntroSlideItem
            orientation={"bottom"}
            title={"Listen to the greatests"}
            subtitle={
              "Now you can listen to the best music available on your device"
            }
            animation={IntroLottieAnimationSecond}
          />
          <IntroSlideItem
            orientation={"top"}
            title={"Listen to the greatests"}
            subtitle={
              "Now you can listen to the best music available on your device"
            }
            animation={IntroLottieAnimationThird}
          />
        </ScrollView>
        <PaginationView />
      </SafeAreaView>
    </>
  );
};

export default AppIntro;

const styles = StyleSheet.create({
  IntroSlideItemTitle: {
    marginLeft: Space.Big,
    marginRight: Space.Big * 3,
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
  IntroSlideItemSubtitle: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    marginLeft: Space.Big,
    marginRight: Space.Big * 3,
    color: "gray",
  },
});
