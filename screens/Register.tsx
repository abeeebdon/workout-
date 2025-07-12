import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Register</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;

const styles = StyleSheet.create({});
