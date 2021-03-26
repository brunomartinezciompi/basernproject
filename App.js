import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsView from "./src/screens/details";
import HomeView from "./src/screens/home";
import { Text } from "react-native";
import BackButton from "./src/components/backButton";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "500" }}>Welcome</Text>
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsView}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
