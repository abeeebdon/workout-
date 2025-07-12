import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Heading from "../components/Heading";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationTypes } from "../types";
const genders: { imageSrc: ImageSourcePropType; value: "male" | "female" }[] = [
  { value: "male", imageSrc: require("../assets/male.png") },
  { value: "female", imageSrc: require("../assets/female.png") },
];
const SelectGender = () => {
  const [selectGender, setSelectGender] = useState<
    undefined | "male" | "female"
  >();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();

  const handleContinue = () => {
    navigation.navigate("motivation");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Heading
            paragraph="Help us tailor your fitness experience by sharing your gender. Choose the option that best describes you."
            heading="You are?"
          />
        </View>
        <View style={styles.selector}>
          {genders.map((gender) => {
            return (
              <Pressable
                key={gender.value}
                onPress={() => setSelectGender(gender.value)}
                style={[
                  styles.genderSelect,
                  {
                    flexDirection:
                      gender.value == "male" ? "row" : "row-reverse",

                    backgroundColor:
                      gender.value === selectGender ? "#2C4BA0" : "transparent",
                  },
                ]}
              >
                <Image source={gender.imageSrc} style={styles.image} />
                <Text
                  style={[
                    styles.genderText,
                    {
                      color:
                        gender.value === selectGender ? "white" : "#2C4BA0",
                    },
                  ]}
                >
                  {gender.value}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={handleContinue}
          style={[
            styles.continue,

            {
              backgroundColor: selectGender ? "#2C4BA0" : "#F7FAFC",
              borderWidth: selectGender ? 0 : 1,
            },
          ]}
          disabled={!selectGender}
        >
          <Text
            style={{
              color: selectGender ? "white" : "#2C4BA0",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SelectGender;

const styles = StyleSheet.create({
  selector: {
    display: "flex",
    marginHorizontal: 16,
    gap: 10,
  },
  genderSelect: {
    height: 250,
    display: "flex",
    gap: 20,
    alignItems: "center",
    borderRadius: 16,
  },
  image: {
    width: "50%",
    height: "96%",
    marginBottom: 10,
  },
  genderText: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  continue: {
    margin: 16,
    marginTop: 30,
    padding: 12,
    borderRadius: 16,
    borderColor: "#C1C9D280",
  },
});
