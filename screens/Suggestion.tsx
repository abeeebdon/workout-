import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/Heading";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationTypes } from "../types";

const Suggestion = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Heading
            backBtn
            paragraph="Get ready for a workout tailored to your fitness goals and preferences. Let's make progress together!"
            heading="Selected for you"
          />
          <View>
            <ImageBackground
              source={require("../assets/sit-image.png")}
              style={styles.imageBg}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Beginner * full body
              </Text>
            </ImageBackground>
          </View>

          <TouchableOpacity
            style={styles.submitContainer}
            onPress={() => navigation.navigate("home")}
          >
            <Text style={styles.submitBtn}>Start now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  imageBg: {
    minHeight: 400,
    margin: 16,
    marginVertical: 16,
    paddingTop: 20,
  },
  submitContainer: {
    margin: 16,
    marginTop: 40,
    backgroundColor: "#2C4BA0",
    padding: 6,
    borderRadius: 12,
  },
  submitBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
});
