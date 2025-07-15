import { Image, Pressable, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants/Colors";
const user = [
  { label: "Age", value: 30 },
  { label: "Weight", value: 30 },
  { label: "Height", value: 30 },
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
            <Ionicons name="settings" size={24} style={{ color: "#6C757D" }} />
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
          <Text
            style={{
              color: "#343A40",
              fontSize: 16,
              fontWeight: "medium",
              lineHeight: 24,
            }}
          >
            Basic Info
          </Text>
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
          <Text
            style={{
              color: "#343A40",
              fontSize: 16,
              fontWeight: "medium",
              lineHeight: 24,
            }}
          >
            Basic Info
          </Text>
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
          <Text
            style={{
              color: "#343A40",
              fontSize: 16,
              fontWeight: "medium",
              lineHeight: 24,
            }}
          >
            Basic Info
          </Text>
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
    backgroundColor: "#CED4DA",
    padding: 10,
    borderRadius: 20,
    margin: 16,
    gap: 10,
  },
  userContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    paddingVertical: 6,
  },
});
