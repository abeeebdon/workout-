import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { forYouStyles as styles } from "../styles/homeStyles";

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
        imageStyle={styles.imageStyle}
      >
        <View style={styles.imageOverlay}>
          <Text style={styles.imageText}>ABS Beginner</Text>
          <Text style={styles.imageSubText}>20 minutes 12 exercises</Text>
        </View>
      </ImageBackground>

      {/* Your Progress */}
      <View style={styles.yourProgress}>
        <Text style={styles.progressTitle}>Your progress</Text>
        <View style={styles.progrssContainer}>
          <View style={styles.progressTracker}>
            <Text style={styles.progressText}>
              You have not started any program.
            </Text>
            <Text style={styles.progressPercent}>0%</Text>
          </View>

          <View style={styles.healthMetricsBox}>
            <View style={styles.healthMetricsHeader}>
              <Text style={styles.healthTitle}>Health Metrics</Text>
              <Text style={styles.healthUpdated}>Updated 5 mins ago</Text>
            </View>

            <View style={styles.paramContainer}>
              {params.map((param, i) => (
                <View key={i} style={styles.param}>
                  <Text>{param.title}</Text>
                  <Text>
                    {param.value} {param.unit}
                  </Text>
                </View>
              ))}
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
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <ImageBackground
              source={item.imageSrc}
              imageStyle={styles.categoryImage}
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
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <ImageBackground
              source={item.imageSrc}
              imageStyle={styles.categoryImage}
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
