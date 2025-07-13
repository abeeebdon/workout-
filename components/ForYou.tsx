import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const ForYou = () => {
  const [query, setQuery] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search ..."
          value={query}
          onChangeText={setQuery}
          placeholderTextColor="white"
        />
        <Ionicons name="search" size={20} color="white" style={styles.icon} />
      </View>
      <View style={styles.selectLevel}>
        <Text>Select Level</Text>
      </View>
    </View>
  );
};

export default ForYou;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#6C8EEF",
    borderWidth: 1,
    borderColor: "#CED4DA",
    elevation: 1,
    borderRadius: 12,
    padding: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderWidth: 0,
    color: "white",
  },
  icon: {},
  selectLevel: {
    marginVertical: 16,
  },
});
