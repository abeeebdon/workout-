import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/Heading";

const Motivation = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Heading
            backBtn
            paragraph="Uncover what drives you on your fitness journey. Share what motivates you, and we'll personalize your experience to keep you inspired"
            heading="What motivates you?"
          />
          <View style={styles.selectMotivation}>
            <Text style={{ color: "#343A40", fontWeight: "medium" }}>
              Select at least three
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Motivation;

const styles = StyleSheet.create({
  selectMotivation: {
    backgroundColor: "#F7F9FC",
    height: 200,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
