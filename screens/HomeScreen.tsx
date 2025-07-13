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

const nav = ["for you", "browse", "saved"];
const components = [<ForYou />, <Browse />, <Saved />];
const HomeScreen = () => {
  const [activeNav, setActiveNav] = useState(0);
  const user = "John";
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.headContainer}>
            <View>
              <Text>Hi {user}!</Text>
              <Text>Let's get to work</Text>
            </View>
            <View style={styles.userImageContainer}>
              <Image
                source={require("../assets/profile.png")}
                style={styles.userImage}
              />
            </View>
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
                        nav[activeNav] == na ? "blue" : "transparent",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.navItemText,
                      {
                        color: nav[activeNav] == na ? "white" : "blue",
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
    borderWidth: 2,
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
