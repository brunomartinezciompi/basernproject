import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsView from "./src/screens/details";
import OnboardingView from "./src/screens/onboarding";
import BackButton from "./src/components/backButton";
import { AuthenticationProvider } from "./src/contexts/authentication";

const Stack = createStackNavigator();

function App() {
  return (
    <AuthenticationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions>
          <Stack.Screen
            name="Home"
            component={OnboardingView}
            options={{
              headerShown: false,
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
    </AuthenticationProvider>
  );
}

export default App;
