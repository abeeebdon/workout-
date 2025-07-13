import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationTypes } from "../types";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  const togglePasswordVisibility = () => {
    setSecureText((prev) => !prev);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/onboarding1.png")}
          style={styles.background}
          resizeMode="cover"
        >
          {/* overlay */}
          <View style={styles.overlay} />

          {/* content */}
          <View style={styles.container}>
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.headingText}>
              Log in to access your personalized workouts and track your fitness
              journey.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            {/* Email Field */}
            <View style={styles.emailContainer}>
              <Ionicons name="mail" size={22} color="#888" />
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email / Username"
                keyboardType="email-address"
                style={styles.input}
                autoCapitalize="none"
              />
            </View>

            {/* Password Field */}
            <View style={styles.emailContainer}>
              <Ionicons name="lock-closed" size={22} color="#888" />
              <View style={styles.passwordContainer}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  secureTextEntry={secureText}
                  style={styles.input}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={secureText ? "eye-off" : "eye"}
                    size={22}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.submitContainer}
            onPress={() => navigation.navigate("home")}
          >
            <Text style={styles.submitBtn}>Login</Text>
          </TouchableOpacity>
          <Pressable style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
          <View style={styles.orContainer}>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <View style={styles.linkSignup}>
              <Text style={styles.DontText}>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate("register")}>
                <Text style={(styles.DontText, { color: "blue" })}>Signup</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.81)", // 25% dark overlay
  },
  container: {
    zIndex: 1,
    padding: 15,
  },
  heading: {
    color: "blue",
    fontSize: 24,
    paddingTop: 15,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: 16,
    color: "#111111B2",
    marginTop: 8,
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    display: "flex",
    gap: 40,
    marginTop: 60,
    paddingTop: 60,
  },

  input: {
    width: "85%",
    padding: 12,
    paddingRight: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  passwordContainer: {
    position: "relative",
    width: "85%",
    display: "flex",
    borderBottomWidth: 1,
    borderColor: "#ccc",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  eyeIcon: {},
  submitContainer: {
    margin: 16,
    marginTop: 20,
    backgroundColor: "blue",
    padding: 6,
    borderRadius: 12,
  },
  submitBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  forgotPassword: {
    margin: 16,
    marginTop: 8,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#6C757D",
    fontSize: 16,
  },
  orContainer: {
    marginTop: 30,
  },
  linkSignup: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
  },
  DontText: {
    color: "#6C757D",
    fontSize: 16,
  },
});
