import { useEffect, useRef, useState } from "react";
import {
  Alert,
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

const OTP_LENGTH = 4;
const OtpScreen = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [success, setSuccess] = useState(false);
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return; // allow only 1 digit or empty

    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    if (!otp[3]) return;
    handleSubmit();
  }, [otp]);
  const handleSubmit = () => {
    const fullOtp = otp.join("");
    Alert.alert(fullOtp);
    setSuccess(true);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {success ? (
          <View style={{ paddingTop: 30 }}>
            <View style={styles.emailContainer}></View>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Email confirmed</Text>
              <Text style={styles.headingText}>
                Congratulations! Your email has been successfully confirmed.
                You're now ready to explore personalized workouts, track your
                progress, and connect with our vibrant fitness community. Get
                started on your fitness journey!
              </Text>
            </View>
            <View style={styles.getStartedContainer}>
              <TouchableOpacity
                style={styles.getStarted}
                onPress={() => navigation.navigate("selectgender")}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Enter OTP </Text>
              <Text style={styles.headingText}>
                Enter the OTP we sent to your email
              </Text>
            </View>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  style={styles.input}
                  autoFocus={index === 0}
                />
              ))}
            </View>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
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
  otpContainer: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#fff",
  },
  emailContainer: {
    marginVertical: 40,
    marginHorizontal: 20,
    height: 100,
    backgroundColor: "blue",
  },
  getStartedContainer: {
    marginTop: 40,

    height: "40%",
    justifyContent: "flex-end",
  },
  getStarted: {
    margin: 16,
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 12,
  },
});
