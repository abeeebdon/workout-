import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootNavigationTypes } from "../types";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator<RootNavigationTypes>();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tracker"
        component={HomeScreen}
        options={{
          tabBarBadge: 4,
          tabBarLabel: "Tracker",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="track-changes" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={HomeScreen}
        options={{
          tabBarBadge: 4,
          tabBarLabel: "Tracker",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tips"
        component={HomeScreen}
        options={{
          tabBarBadge: 4,
          tabBarLabel: "Tracker",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="tips-and-updates" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
