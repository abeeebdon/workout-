import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants/Colors";
const settings = [
  "Account settings",
  "Change password",
  "Update Email address",
];
const notification = [
  "Notification preference",
  "Enable workout reminder",
  "Receive achievement notification",
];
const external = [
  "About",
  "Terms of use",
  "Privacy Policy",
  "FAQs",
  "Contact us",
];
const SettingsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#343A40" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <ScrollView style={{ marginVertical: 16 }}>
        {/* Read-only Info */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.optionText}>Email</Text>
            <Text style={styles.optionText}>johndane22@gmail.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.optionText}>Phone number</Text>
            <Text style={styles.optionText}>+234 809 2345 678</Text>
          </View>
        </View>

        {/* Options */}
        <View style={styles.optionContainer}>
          {notification.map((option, idx) => (
            <TouchableOpacity key={idx} style={styles.optionRow}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.optionContainer}>
          {settings.map((option, idx) => (
            <TouchableOpacity key={idx} style={styles.optionRow}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.optionContainer}>
          {external.map((option, idx) => (
            <TouchableOpacity key={idx} style={styles.optionRow}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionRow}>
            <Text style={[styles.optionText, { color: "#E01414" }]}>
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionRow}>
            <Text
              style={[
                styles.optionText,
                { color: colors.primary, fontWeight: "500" },
              ]}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    borderBottomColor: "#CED4DA",
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "500",
    color: "#343A40",
  },

  infoContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  infoRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#CED4DA",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
  },

  optionContainer: {
    borderTopWidth: 1,
    borderColor: "#CED4DA",
    marginTop: 25,
  },
  optionRow: {
    padding: 16,
    borderBottomColor: "#CED4DA",
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: "#111827",
  },
});
