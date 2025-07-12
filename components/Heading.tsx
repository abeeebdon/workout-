import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  heading: string;
  paragraph: string;
  backBtn?: boolean;
}
const Heading = ({ heading, paragraph, backBtn }: Props) => {
  return (
    <View style={styles.headingContainer}>
      <View
        style={{
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          paddingTop: 15,
        }}
      >
        {backBtn && <Ionicons name="arrow-back" size={24} />}
        <Text style={styles.heading}>{heading} </Text>
      </View>
      <Text style={styles.headingText}>{paragraph}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  headingContainer: {
    padding: 15,
  },
  heading: {
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: 16,
    color: "#111111B2",
    marginTop: 8,
  },
});
