import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

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
            <Text>
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
              <Ionicons name="mail" size={22} color="#888" />
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
    fontWeight: "bold",
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 40,
  },

  input: {
    width: "85%",
    padding: 12,
    paddingRight: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  passwordContainer: {
    position: "relative",
    justifyContent: "center",
  },
  emailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    top: 14,
  },
});
