import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationTypes } from "../types";
import Heading from "../components/Heading";
import { colors } from "../constants/Colors";

const OTP_LENGTH = 4;
const OtpScreen = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [success, setSuccess] = useState(false);
  const [time, setTime] = useState(60); // 👈 Add countdown state

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
    let timer: NodeJS.Timeout;

    if (time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  const handleResend = () => {
    if (time === 0) {
      setTime(60);
      Alert.alert("OTP Resent");
      // resend logic here
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
            <View style={styles.emailContainer}>
              <Image
                source={require("../assets/email.png")}
                style={{ height: "100%" }}
              />
            </View>
            <Heading
              heading="Email confirmed"
              paragraph="Congratulations! Your email has been successfully confirmed.
                You're now ready to explore personalized workouts, track your
                progress, and connect with our vibrant fitness community. Get
                started on your fitness journey!"
            />

            <View style={styles.getStartedContainer}>
              <TouchableOpacity
                style={styles.getStarted}
                onPress={() => navigation.navigate("selectgender")}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 16 }}
                >
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Heading
              heading="Enter OTP"
              paragraph=" Enter the OTP we sent to your email"
            />

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
            <View style={styles.didncode}>
              <Text style={{ color: "#6C757D" }}>Didn't receive code </Text>
              <TouchableOpacity
                onPress={handleResend}
                disabled={time !== 0}
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Ionicons
                  name="refresh"
                  size={16}
                  color={time === 0 ? "blue" : "gray"}
                />
                <Text style={{ color: time === 0 ? "blue" : "gray" }}>
                  Resend in {time}s
                </Text>
              </TouchableOpacity>
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
    margin: 16,
    gap: 10,
  },
  input: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: "#6C757D",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#fff",
  },
  emailContainer: {
    marginVertical: 40,
    marginHorizontal: 20,
    height: 180,
    backgroundColor: "#F7F9FC",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 16,
    elevation: 4,
  },
  getStartedContainer: {
    height: "40%",
    justifyContent: "flex-end",
  },
  getStarted: {
    margin: 16,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 12,
  },
  didncode: {
    display: "flex",
    flexDirection: "row",
    margin: 16,
  },
});
