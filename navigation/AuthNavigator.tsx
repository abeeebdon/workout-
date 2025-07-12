import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

function AuthNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
}
export default AuthNav;
