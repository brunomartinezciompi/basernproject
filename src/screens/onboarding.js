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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, validatePasswords } from "../utils/onboarding";
import Colors from "../utils/colors";

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
      <SocialForm action={dispatch} />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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

const EmailPasswordForm = ({
  authenticationForm,
  action,
  setForm,
  navigation,
}) => {
  const validateSignInButton = () => {
    const emailHaveError = validateEmail(authenticationForm.email);

    const passwordHaveError = validatePasswords(
      authenticationForm.password,
    );

    return !emailHaveError.error && !passwordHaveError.error;
  };

  const signInValidated = validateSignInButton();

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
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.forgotPasswordTitleStyle}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!signInValidated}
        style={
          signInValidated
            ? styles.loginButton
            : [
                styles.loginButton,
                { borderColor: Colors.whiteDisabled, borderWidth: 0.5 },
              ]
        }
        onPress={() => {
          action({ type: "onboarding_sign_in" });
        }}
      >
        <Text
          style={
            signInValidated
              ? { fontSize: 16, color: "white" }
              : { color: Colors.whiteDisabled }
          }
        >
          Log In
        </Text>
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
        <KeyboardAwareScrollView
          bounces={false}
          style={{ backgroundColor: "transparent" }}
        >
          <OnboardingForm navigation={navigation} />
        </KeyboardAwareScrollView>
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
