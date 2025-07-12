import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationTypes } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
const OnboardingScreen2 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ display: "flex", gap: 10, flexDirection: "column" }}>
          <View style={{ height: "70%" }}>
            <ImageBackground
              source={require("../assets/onboarding3.png")}
              style={styles.background}
              resizeMode="cover"
            ></ImageBackground>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>
              Get <Text style={{ color: "blue" }}>personalized </Text> workout
              tailored for your <Text style={{ color: "blue" }}>fitness</Text>{" "}
              goals
            </Text>
            <View style={styles.nextBtnContainer}>
              <Pressable
                style={styles.nextBtn}
                onPress={() => navigation.navigate("register")}
              >
                <Text style={styles.nextBtnText}>Next</Text>
              </Pressable>
            </View>
            <View style={styles.navIndicator}>
              {Array.from({ length: 3 }).map((_, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: index == 2 ? "none" : "blue",
                    borderWidth: index == 2 ? 1 : 0,
                    borderColor: "blue",
                    width: 20,
                    height: 14,
                    borderRadius: 5,
                    marginHorizontal: 4,
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OnboardingScreen2;

const styles = StyleSheet.create({
  container: {
    padding: 14,
    height: "30%",
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 40,
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
    marginVertical: 30,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  nextBtn: {
    backgroundColor: "#2C4BA0",
    width: 100,
    padding: 10,
    borderRadius: 10,
  },
  skipBtn: {
    backgroundColor: "#C1C9D280",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 100,
    borderColor: "#C1C9D2",
  },
  skipBtnText: {
    color: "#2C4BA0",
    textAlign: "center",
    fontSize: 16,
  },
  nextBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  navIndicator: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
  },
});
