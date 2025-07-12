import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
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
              <Pressable style={styles.nextBtn}>
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
    width: "100%",
    height: "100%",
    justifyContent: "center",
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
