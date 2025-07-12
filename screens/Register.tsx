import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationTypes } from "../types";

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
}

const inputFields: {
  label: string;
  val: keyof UserDetails;
}[] = [
  { label: "first name", val: "firstName" },
  { label: "last name", val: "lastName" },
  { label: "email address", val: "email" },
];

const Register = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  const handleChange = (key: keyof UserDetails, value: string) => {
    setUserDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Welcome !!! </Text>
              <Text style={styles.headingText}>
                Get personalized fitness with us! Sign up for tailored workouts,
                track progress, and connect with others. Start now!
              </Text>
            </View>

            <View style={styles.inputContainer}>
              {inputFields.map((inp) => (
                <View key={inp.val}>
                  <Text style={styles.label}>{inp.label}</Text>
                  <TextInput
                    value={userDetails[inp.val]}
                    onChangeText={(text) => handleChange(inp.val, text)}
                    placeholder={`Enter ${inp.label}`}
                    style={styles.input}
                    autoCapitalize="none"
                  />
                </View>
              ))}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              height: "40%",
            }}
          >
            <TouchableOpacity style={styles.submitContainer}>
              <Text style={styles.submitBtn}>Signup</Text>
            </TouchableOpacity>
            <View style={styles.linkSignup}>
              <Text style={styles.DontText}>Already have an account? </Text>
              <Pressable onPress={() => navigation.navigate("login")}>
                <Text style={(styles.DontText, { color: "blue" })}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  headingContainer: {
    padding: 15,
  },
  heading: {
    color: "blue",
    fontSize: 24,
    paddingTop: 15,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: 16,
    color: "#111111B2",
    marginTop: 8,
  },
  inputContainer: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
    textTransform: "capitalize",
  },
  input: {
    width: "100%",
    padding: 12,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  submitContainer: {
    margin: 16,
    marginTop: 20,
    backgroundColor: "blue",
    padding: 6,
    borderRadius: 12,
  },
  submitBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  linkSignup: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
  },
  DontText: {
    color: "#6C757D",
    fontSize: 16,
  },
});
