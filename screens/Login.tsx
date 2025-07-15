import {
  ImageBackground,
  Pressable,
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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootNavigationTypes } from "../types";
import { loginStyles as styles } from "../styles/authStyles";
import Heading from "../components/Heading";
import { colors } from "../constants/Colors";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [secureText, setSecureText] = useState(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();

  const togglePasswordVisibility = () => {
    setSecureText((prev) => !prev);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login Data:", data);
    navigation.navigate("home");
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
          <Heading
            heading="Welcome Back"
            paragraph="Log in to access your personalized workouts and track your fitness journey."
          />

          <View style={styles.inputContainer}>
            {/* Email Field */}
            <View>
              <View style={styles.emailContainer}>
                <Ionicons name="mail" size={22} color="#888" />
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder="Email / Username"
                      keyboardType="email-address"
                      style={styles.input}
                      autoCapitalize="none"
                    />
                  )}
                />
              </View>
              {errors.email && (
                <Text style={{ color: "red", marginBottom: 8 }}>
                  {errors.email.message}
                </Text>
              )}
            </View>
            <View>
              {/* Password Field */}
              <View style={styles.emailContainer}>
                <Ionicons name="lock-closed" size={22} color="#888" />
                <View style={styles.passwordContainer}>
                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value, onBlur } }) => (
                      <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder="Password"
                        secureTextEntry={secureText}
                        style={[styles.input, { borderBottomWidth: 0 }]}
                        autoCapitalize="none"
                      />
                    )}
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
              {errors.password && (
                <Text style={{ color: "red", marginBottom: 8 }}>
                  {errors.password.message}
                </Text>
              )}
            </View>
          </View>

          <TouchableOpacity
            style={styles.submitContainer}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.submitBtn}>Login</Text>
          </TouchableOpacity>

          <Pressable style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>

          <View style={styles.orContainer}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                lineHeight: 20,
                color: "#343A40",
              }}
            >
              OR
            </Text>
            <View style={styles.linkSignup}>
              <Text style={styles.DontText}>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate("register")}>
                <Text style={[styles.DontText, { color: colors.primary }]}>
                  Signup
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
