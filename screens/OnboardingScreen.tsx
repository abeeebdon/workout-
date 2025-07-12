import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationTypes } from "../types";
const OnboardingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageBackground
          source={require("../assets/onboarding1.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <Text style={styles.text}>
              Improve your{" "}
              <Text style={{ color: "blue" }}> overall wellness </Text> in no
              time
            </Text>
            <View style={styles.nextBtnContainer}>
              <Pressable
                style={styles.nextBtn}
                onPress={() => navigation.navigate("onboarding1")}
              >
                <Text style={styles.nextBtnText}>Next</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    padding: 10,
  },
  background: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  nextBtnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 30,
    paddingBottom: 10,
  },
  nextBtn: {
    backgroundColor: "blue",
    width: 100,
    padding: 10,
    borderRadius: 10,
  },
  nextBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
