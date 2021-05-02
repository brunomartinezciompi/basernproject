import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsView from "./src/screens/details";
import OnboardingView from "./src/screens/onboarding";
import SignUpView from "./src/screens/sign-up";
import AppIntro from "./src/screens/appIntro";
import BackButton from "./src/components/backButton";
import { AuthenticationProvider } from "./src/contexts/authentication";
import SplashScreen from "react-native-splash-screen";

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthenticationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro" screenOptions>
          <Stack.Screen
            name="Intro"
            component={AppIntro}
            options={({ navigation }) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingView}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpView}
            options={{
              headerLeft: null, 
              headerTitle: "",
              headerStyle: { backgroundColor: "black", shadowOpacity: 0}
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
