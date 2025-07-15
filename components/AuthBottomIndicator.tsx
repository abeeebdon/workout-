import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/Colors";

const AuthBottomIndicator = ({ active }: { active: number }) => {
  return (
    <View style={styles.navIndicator}>
      {Array.from({ length: 3 }).map((_, index) => (
        <View
          key={index}
          style={{
            backgroundColor: index == active ? "none" : colors.primary,
            borderWidth: index == active ? 1 : 0,
            borderColor: colors.primary,
            width: 20,
            height: 14,
            borderRadius: 5,
            marginHorizontal: 4,
          }}
        />
      ))}
    </View>
  );
};

export default AuthBottomIndicator;

const styles = StyleSheet.create({
  navIndicator: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
  },
});
