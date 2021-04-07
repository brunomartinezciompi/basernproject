import React, { useState, useRef } from "react";
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

const PaginationView = ({ selectedIndex, navigateNext }) => {
  const DotView = ({ selected }) => {
    return (
      <View
        style={[
          {
            backgroundColor: selected ? "#3377FF" : "#D4D6DA",
          },
          styles.PaginationDotDimension,
        ]}
      ></View>
    );
  };

  return (
    <View style={styles.PaginationMainView}>
      <View style={styles.PaginationDotsView}>
        <DotView selected={selectedIndex === 0} />
        <DotView selected={selectedIndex === 1} />
        <DotView selected={selectedIndex === 2} />
      </View>

      <TouchableOpacity
        style={styles.PaginationNextButton}
        onPress={navigateNext}
      >
        <Text style={{ color: "white", fontSize: 14, fontWeight: "700" }}>
          {selectedIndex === 2 ? "Start" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const AppIntro = ({ navigation }) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollViewRef = useRef();

  const handlePageChange = (e) => {
    var offset = e.nativeEvent.contentOffset;
    if (offset) {
      setPaginationIndex(Math.round(offset.x / Space.widthDimension));
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
          horizontal={true}
          onMomentumScrollEnd={handlePageChange}
          scrollEventThrottle={16}
          pagingEnabled={true}
          ref={scrollViewRef}
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
        <PaginationView
          selectedIndex={paginationIndex}
          navigateNext={() => {
            paginationIndex === 2
              ? navigation.navigate("Home")
              : scrollViewRef.current.scrollTo({
                  x: (paginationIndex + 1) * Space.widthDimension,
                  y: 0,
                  animated: true,
                });
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  IntroSlideItemTitle: {
    marginLeft: Space.Big * 2,
    marginRight: Space.Big * 3,
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
  IntroSlideItemSubtitle: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    marginLeft: Space.Big * 2,
    marginRight: Space.Big * 3,
    color: "gray",
  },
  PaginationMainView: {
    height: 90,
    width,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  PaginationDotsView: {
    height: 40,
    width: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: Space.Big,
  },
  PaginationDotDimension: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  PaginationNextButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#3377FF",
    marginRight: Space.Big,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppIntro;
