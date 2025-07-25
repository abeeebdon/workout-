import { Image, Pressable, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../constants/Colors";
const user = [
  { label: "Age", value: 30 },
  { label: "Weight", value: 30 },
  { label: "Height", value: 30 },
];
const fitnessGoals = [
  "Nice shape",
  "Body fit",
  "Motivation",
  "Weight watch",
  "Health improvement",
  "Nutrition",
];
const workoutPreference = [
  "Nice shape",
  "Body fit",
  "Motivation",
  "Weight watch",
  "Health improvement",
  "Nutrition",
];
const Profile = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headingContainer}>
          <View style={styles.headontainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
            <Text style={{ fontSize: 22, lineHeight: 40, color: "#343A40" }}>
              Profile
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Feather name="settings" size={24} style={{ color: "#6C757D" }} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.userImage}
          />
        </View>
        <Text style={styles.username}>Jane Doe</Text>

        <TouchableOpacity style={styles.editProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.userDetails}>
          <View>
            <Text style={styles.label}>Basic Info</Text>
            <View style={styles.basicDetails}>
              {user.map((data) => {
                return (
                  <View key={data.label} style={styles.userContainer}>
                    <Text
                      style={{
                        color: "#343A40",
                        fontSize: 14,
                        width: 40,
                        lineHeight: 18,
                      }}
                    >
                      {data.label}
                    </Text>
                    <Text>:</Text>
                    <Text
                      style={{
                        color: "#343A40",
                        fontSize: 14,
                        width: 60,
                        lineHeight: 18,
                      }}
                    >
                      {data.value}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* fitness goals  */}
          <View>
            <Text style={styles.label}>Fitness Goals</Text>
            <View style={styles.fitnessGoal}>
              {fitnessGoals.map((data) => {
                return (
                  <Text
                    key={data}
                    style={{
                      color: "white",
                      backgroundColor: colors.primary,
                      fontSize: 14,
                      lineHeight: 18,
                      borderRadius: 24,
                      padding: 10,
                      paddingHorizontal: 14,
                      textAlign: "center",
                    }}
                  >
                    {data}
                  </Text>
                );
              })}
            </View>
          </View>
          <View>
            <Text style={styles.label}>Workout Preference</Text>
            <View style={styles.fitnessGoal}>
              {workoutPreference.map((data) => {
                return (
                  <Text
                    key={data}
                    style={{
                      color: "white",
                      backgroundColor: colors.primary,
                      fontSize: 14,
                      lineHeight: 18,
                      borderRadius: 24,
                      padding: 10,
                      paddingHorizontal: 14,
                      textAlign: "center",
                    }}
                  >
                    {data}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headontainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginHorizontal: "auto",
  },
  userImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  username: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    color: "#343A40",
  },
  editProfile: {
    borderColor: colors.primary,
    borderWidth: 1,
    width: 80,
    marginHorizontal: "auto",
    marginTop: 16,
    padding: 8,
    borderRadius: 10,
  },
  editProfileText: {
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    color: colors.primary,
  },
  userDetails: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#CED4DA",
    paddingTop: 40,
    paddingHorizontal: 16,
    gap: 20,
  },
  basicDetails: {
    backgroundColor: "#c3d0dd50",
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#F7F9FC",
    margin: 16,
    gap: 10,
  },
  label: {
    color: "#343A40",
    fontSize: 16,
    fontWeight: "medium",
    lineHeight: 24,
  },
  userContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    paddingVertical: 6,
  },
  fitnessGoal: {
    flexDirection: "row",
    backgroundColor: "#c3d0dd50",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#F7F9FC",
    gap: 6,
    margin: 16,
    padding: 16,
    flexWrap: "wrap",
  },
});
