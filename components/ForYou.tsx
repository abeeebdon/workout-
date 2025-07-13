import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CategoriesType {
  name: string;
  imageSrc: ImageSourcePropType;
}

const categories: CategoriesType[] = [
  { name: "Strength", imageSrc: require("../assets/image2.png") },
  { name: "Cardio", imageSrc: require("../assets/image3.png") },
  { name: "Power", imageSrc: require("../assets/image3.png") },
];
const params = [
  { value: "176", title: "Weight", unit: "lbs" },
  { value: "176", title: "Weight", unit: "lbs" },
  { value: "176", title: "Weight", unit: "lbs" },
];

const ForYou = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoriesType>();

  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <ImageBackground
        source={require("../assets/image-sit.png")}
        style={styles.imageBg}
        imageStyle={{ borderRadius: 12 }}
      >
        <View
          style={[styles.imageOverlay, { paddingBottom: 20, paddingLeft: 20 }]}
        >
          <Text style={styles.imageText}>ABS Beginner</Text>
          <Text style={{ color: "white" }}>20 minutes 12 exercises</Text>
        </View>
      </ImageBackground>
      <View style={styles.yourProgress}>
        <Text>Your progress</Text>
        <View style={styles.progrssContainer}>
          <View style={styles.progressTracker}>
            <Text>You have not started any program.</Text>
            <Text>0%</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              marginVertical: 10,
              marginTop: 20,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Health Metrics</Text>
            <Text>Updated 5 mins ago</Text>
            <View style={styles.paramContainer}>
              {params.map((param, i) => {
                return (
                  <View key={i} style={styles.param}>
                    <Text>{param.title}</Text>
                    <Text>
                      {param.value} {param.unit}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
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

      {/* No Equipment Training Section */}
      <Text style={styles.sectionTitle}>Body training without equipment</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.name + "_body"}
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

export default ForYou;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flex: 1,
  },
  imageBg: {
    height: 200,
    width: "100%",
    borderRadius: 12,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  imageOverlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    borderRadius: 12,

    justifyContent: "flex-end",
  },
  imageText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#343A40",
    marginBottom: 8,
    textTransform: "uppercase",
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
  yourProgress: {
    marginTop: 30,
  },
  progrssContainer: {
    borderRadius: 12,
    backgroundColor: "#F7F9FC",
    elevation: 1,
    marginVertical: 16,
    marginBottom: 40,
    padding: 14,
  },
  progressTracker: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paramContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  param: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 12,
    width: "30%",
    alignItems: "center",
  },
});
