import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/Heading";
import { tags } from "../components/data";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigationTypes } from "../types";

const Motivation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationTypes>>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  const handleSubmit = () => {
    if (selectedTags.length < 3) {
      Alert.alert("Please select at least 3 options");
      return;
    }
    Alert.alert("Selected Tags", selectedTags.join(", "));
    navigation.navigate("suggestion");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Heading
            backBtn
            paragraph="Uncover what drives you on your fitness journey. Share what motivates you, and we'll personalize your experience to keep you inspired"
            heading="What motivates you?"
          />
          <View style={styles.selectMotivation}>
            <Text style={{ color: "#343A40", fontWeight: "medium" }}>
              Select at least three
            </Text>
            <ScrollView
              contentContainerStyle={styles.tagsContainer}
              showsVerticalScrollIndicator={false}
            >
              {tags.map((tag) => (
                <Pressable
                  key={tag}
                  onPress={() => toggleTag(tag)}
                  style={[
                    styles.tag,
                    selectedTags.includes(tag) && styles.tagSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.tagText,
                      selectedTags.includes(tag) && styles.tagTextSelected,
                    ]}
                  >
                    {tag}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity
            style={styles.submitContainer}
            onPress={handleSubmit}
          >
            <Text style={styles.submitBtn}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Motivation;

const styles = StyleSheet.create({
  selectMotivation: {
    backgroundColor: "#F7F9FC",
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  tagsContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  tagSelected: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  tagText: {
    color: "#333",
    fontSize: 14,
  },
  tagTextSelected: {
    color: "white",
  },
  submitContainer: {
    margin: 16,
    marginTop: 40,
    backgroundColor: "#2C4BA0",
    padding: 6,
    borderRadius: 12,
  },
  submitBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
});
