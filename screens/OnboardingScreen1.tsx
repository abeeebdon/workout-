import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationTypes } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthBottomIndicator from "../components/AuthBottomIndicator";
const OnboardingScreen1 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ display: "flex", gap: 10, flexDirection: "column" }}>
          <View style={{ height: "70%" }}>
            <ImageBackground
              source={require("../assets/onboarding2.png")}
              style={styles.background}
              resizeMode="cover"
            ></ImageBackground>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>
              Easily track your{" "}
              <Text style={{ color: "blue" }}>nutrition </Text> and{" "}
              <Text style={{ color: "blue" }}>fitness</Text> level
            </Text>
            <View style={styles.nextBtnContainer}>
              <Pressable
                style={styles.skipBtn}
                onPress={() => navigation.navigate("register")}
              >
                <Text style={styles.skipBtnText}>Skip</Text>
              </Pressable>
              <Pressable
                style={styles.nextBtn}
                onPress={() => navigation.navigate("onboarding2")}
              >
                <Text style={styles.nextBtnText}>Next</Text>
              </Pressable>
            </View>
            <AuthBottomIndicator active={1} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OnboardingScreen1;

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
    justifyContent: "space-between",
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
});
