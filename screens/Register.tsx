import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationTypes } from "../types";
import { signupStyles as styles } from "../styles/authStyles";
import Heading from "../components/Heading";
import { colors } from "../constants/Colors";

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

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const Register = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetails>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = (data: UserDetails) => {
    navigation.navigate("verification");
    Alert.alert("Please verify your email");
    console.log("Form data:", data);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Heading
              heading="Welcome !!!"
              paragraph="Get personalized fitness with us! Sign up for tailored workouts,
                track progress, and connect with others. Start now!"
            />

            <View style={styles.inputContainer}>
              {inputFields.map((inp) => (
                <View key={inp.val}>
                  <Text style={styles.label}>{inp.label}</Text>
                  <Controller
                    control={control}
                    name={inp.val}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={`Enter ${inp.label}`}
                        style={styles.input}
                        autoCapitalize="none"
                      />
                    )}
                  />
                  {errors[inp.val] && (
                    <Text style={{ color: "red", fontSize: 12 }}>
                      {errors[inp.val]?.message}
                    </Text>
                  )}
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
            <TouchableOpacity
              style={styles.submitContainer}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.submitBtn}>Signup</Text>
            </TouchableOpacity>
            <View style={styles.linkSignup}>
              <Text style={styles.DontText}>Already have an account? </Text>
              <Pressable onPress={() => navigation.navigate("login")}>
                <Text style={[styles.DontText, { color: colors.primary }]}>
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;
