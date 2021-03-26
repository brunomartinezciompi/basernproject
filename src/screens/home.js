import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Button,
  Text,
} from "react-native";
import Space from "../utils/space";

const HomeNavigationView = ({ navigation }) => {
  return (
    <View style={styles.homeNavigationViewStyle}>
      <Text style={styles.basicNavigationTitleStyle}>Basic Navigation</Text>

      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "otherParam value",
          });
        }}
      />
    </View>
  );
};

function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#dfe2e8" }}>
          <HomeNavigationView navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  basicNavigationTitleStyle: {
    margin: Space.Big,
    fontSize: 14,
    fontWeight: "600",
  },
  homeNavigationViewStyle: {
    flex: 1,
    height: 300,
    backgroundColor: "#a4bced",
  },
});

export default HomeScreen;
