import React, { useContext, useState, useEffect } from "react";
import { AuthenticationContext } from "../contexts/authentication";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Space from "../utils/space";
import LoginTextInput from "../components/loginTextInput";
import SocialButton from "../components/socialButton";
import SocialLogin from "../utils/socialButtons";

const OnboardingForm = ({ navigation }) => {
  const { authenticationState, dispatch } = useContext(AuthenticationContext);

  useEffect(() => {
    if (authenticationState.authenticated) {
      navigation.navigate("Details", {
        itemId: 86,
        otherParam: "otherParam value",
      });
    }
  }, [authenticationState]);

  const [authenticationForm, setAuthenticationForm] = useState({
    email: "",
    password: "",
  });

  return (
    <LinearGradient
      style={styles.homeNavigationViewStyle}
      colors={["#313BA5", "black"]}
    >
      <Text style={styles.loginTitleStyle}>Welcome</Text>
      <EmailPasswordForm
        authenticationForm={authenticationForm}
        setForm={setAuthenticationForm}
        action={dispatch}
      />
      <Text style={styles.orTitleStyle}>or</Text>
      <SocialForm />
      <TouchableOpacity>
        <Text style={styles.orTitleStyle}>
          Don't have an account yet?
          <Text style={[styles.orTitleStyle, { fontWeight: "bold" }]}>
            {" "}
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const SocialForm = ({ action }) => {
  return (
    <View style={styles.socialFormView}>
      <SocialButton type={SocialLogin.Facebook} action={action} />
      <SocialButton type={SocialLogin.Google} action={action} />
      <SocialButton type={SocialLogin.Apple} action={action} />
    </View>
  );
};

const EmailPasswordForm = ({ authenticationForm, action, setForm }) => {
  return (
    <>
      <LoginTextInput
        value={authenticationForm.email}
        setValue={(x) =>
          setForm((form) => {
            return { email: x, password: form.password };
          })
        }
        placeholder="Email"
      />
      <LoginTextInput
        secure
        value={authenticationForm.password}
        setValue={(x) =>
          setForm((form) => {
            return { email: form.email, password: x };
          })
        }
        placeholder="Password"
      />
      <Text style={styles.forgotPasswordTitleStyle}>Forgot password?</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          action({ type: "sign in" });
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>Log In</Text>
      </TouchableOpacity>
    </>
  );
};

export default function _({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: "#313BA5" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <ScrollView bounces={false} style={{ backgroundColor: "transparent" }}>
          <OnboardingForm navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  loginTitleStyle: {
    margin: Space.Big,
    marginTop: Space.Big * 4,
    fontSize: 36,
    fontWeight: "700",
    color: "white",
    alignSelf: "center",
  },
  forgotPasswordTitleStyle: {
    fontSize: 14,
    color: "white",
    marginTop: Space.Big,
    marginBottom: Space.Big * 2,
    alignSelf: "center",
  },
  orTitleStyle: {
    fontSize: 14,
    color: "white",
    marginTop: Space.Big,
    alignSelf: "center",
  },
  homeNavigationViewStyle: {
    flex: 1,
    minHeight: Space.heightDimension,
  },
  loginButton: {
    width: Space.widthDimension - 60,
    marginVertical: Space.Big,
    height: 60,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  socialFormView: {
    height: 70,
    width: "100%",
    marginVertical: Space.Big * 2,
    flexDirection: "row",
    justifyContent: "center",
  },
});
