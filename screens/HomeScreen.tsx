import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ForYou from "../components/ForYou";
import Browse from "../components/Browse";
import Saved from "../components/Saved";
import { colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationTypes } from "../types";

const nav = ["for you", "browse", "saved"];
const components = [<ForYou />, <Browse />, <Saved />];
const HomeScreen = () => {
  const [activeNav, setActiveNav] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  const user = "John";
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={[styles.container, { backgroundColor: "white" }]}>
          <View style={styles.headContainer}>
            <View>
              <Text style={{ fontSize: 16, color: "#343A40", lineHeight: 24 }}>
                Hi {user}!
              </Text>
              <Text style={{ fontSize: 14, color: "#6C8EEF", lineHeight: 20 }}>
                Let's get to work
              </Text>
            </View>
            <Pressable
              style={styles.userImageContainer}
              onPress={() => navigation.navigate("profile")}
            >
              <Image
                source={require("../assets/profile.png")}
                style={styles.userImage}
              />
            </Pressable>
          </View>

          <View style={styles.navContainer}>
            {nav.map((na, i) => {
              return (
                <Pressable
                  onPress={() => setActiveNav(i)}
                  key={na}
                  style={[
                    styles.navItem,
                    {
                      backgroundColor:
                        nav[activeNav] == na ? colors.primary : "transparent",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.navItemText,
                      {
                        color: nav[activeNav] == na ? "white" : colors.primary,
                      },
                    ]}
                  >
                    {na}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View>{components[activeNav]}</View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  headContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userImageContainer: {
    width: 50,
    height: 50,
  },
  userImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 12,
  },
  navItem: {
    width: "33%",
    padding: 10,
    borderRadius: 12,
  },
  navItemText: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 16,
  },
});
