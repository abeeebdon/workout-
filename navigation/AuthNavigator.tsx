import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import Register from "../screens/Register";
import OnboardingScreen1 from "../screens/OnboardingScreen1";
import OnboardingScreen2 from "../screens/OnboardingScreen2";
import { RootNavigationTypes } from "../types";

const Stack = createNativeStackNavigator<RootNavigationTypes>();

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
      <Stack.Screen
        name="onboarding1"
        component={OnboardingScreen1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onboarding2"
        component={OnboardingScreen2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default AuthNav;
