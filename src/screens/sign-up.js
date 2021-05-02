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

const SignUpForm = ({ navigation }) => {
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
    confirmPassword: ""
  });

  return (
    <LinearGradient
      style={styles.homeNavigationViewStyle}
      colors={["black", "#313BA5"]}
    >
      <Text style={styles.SignUpTitleStyle}>Sign Up</Text>
      <EmailPasswordForm
        confirmPassword={true}
        authenticationForm={authenticationForm}
        setForm={setAuthenticationForm}
        action={dispatch}
      />
      <Text style={styles.orTitleStyle}>or</Text>
      <SocialForm action={dispatch} />
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

const EmailPasswordForm = ({ authenticationForm, action, setForm, confirmPassword }) => {

  const validateSignUpButton = () => {
    return validateEmail(authenticationForm.email) && validatePasswords(authenticationForm.password, authenticationForm.confirmPassword)
  }


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
      {confirmPassword ? <LoginTextInput
        secure
        value={authenticationForm.confirmPassword}
        setValue={(x) =>
          setForm((form) => {
            return { email: form.email, password: form.password, confirmPassword: x.confirmPassword };
          })
        }
        placeholder="Confirm password"
      /> : null}
      <TouchableOpacity
        disabled={validateSignUpButton()}
        style={styles.signUpButton}
        onPress={() => {
          action({ type: "onboarding_sign_in" });
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

export default function _({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: "black" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#313BA5" }}>
        <KeyboardAwareScrollView
          bounces={false}
          style={{ backgroundColor: "transparent" }}
        >
          <SignUpForm navigation={navigation} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  SignUpTitleStyle: {
    margin: Space.Big,
    marginTop: Space.Big * 4,
    fontSize: 36,
    fontWeight: "700",
    color: "white",
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
  signUpButton: {
    width: Space.widthDimension - 60,
    marginTop: Space.Big * 3,
    marginBottom: Space.Big,
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
