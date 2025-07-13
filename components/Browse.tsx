import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface CategoriesType {
  name: string;
  imageSrc: ImageSourcePropType;
}

const levels = ["Beginner", "Intermediate", "Advanced"];

const categories: CategoriesType[] = [
  { name: "Strength", imageSrc: require("../assets/image2.png") },
  { name: "Cardio", imageSrc: require("../assets/image3.png") },
  { name: "Power", imageSrc: require("../assets/image3.png") },
];

const Browse = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoriesType>();

  const handleSelect = (value: string) => {
    setSelected(value);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Search */}
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

      {/* Level Selector */}
      <View style={styles.selectLevel}>
        <Text style={styles.sectionTitle}>Select Level</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.dropdownText}>
            {selected ? selected : "Select level"}
          </Text>
          <Ionicons name="chevron-down-sharp" />
        </TouchableOpacity>

        {/* Modal Dropdown */}
        <Modal transparent animationType="fade" visible={visible}>
          <TouchableOpacity
            style={styles.modalBackground}
            activeOpacity={1}
            onPressOut={() => setVisible(false)}
          >
            <View style={styles.modalContainer}>
              <FlatList
                data={levels}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <ImageBackground
              source={item.imageSrc}
              imageStyle={{ borderRadius: 12 }}
              style={styles.categoryOption}
            >
              <Text style={styles.catText}>{item.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.sectionTitle}>Body training without equipment</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <ImageBackground
              source={item.imageSrc}
              imageStyle={{ borderRadius: 12 }}
              style={styles.categoryOption}
            >
              <Text style={styles.catText}>{item.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6C8EEF",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "white",
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#343A40",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  selectLevel: {
    marginBottom: 24,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
    textTransform: "capitalize",
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000040",
  },
  modalContainer: {
    marginHorizontal: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  categoryOption: {
    width: 160,
    height: 180,
    justifyContent: "flex-end",
    padding: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
  catText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
