import { StyleSheet } from "react-native";
import { colors } from "../constants/Colors";

export const forYouStyles = StyleSheet.create({
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
  imageStyle: {
    borderRadius: 12,
  },
  imageOverlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    borderRadius: 12,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingLeft: 20,
  },
  imageText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  imageSubText: {
    color: "white",
  },
  yourProgress: {
    marginTop: 30,
  },
  progressTitle: {
    color: "#343A40",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
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
    alignItems: "center",
  },
  progressText: {
    color: "#6C757D",
    fontSize: 14,
    lineHeight: 20,
  },
  progressPercent: {
    fontSize: 26,
    lineHeight: 44,
    color: colors.primary,
  },
  healthMetricsBox: {
    backgroundColor: "#6C8EEF",
    marginVertical: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  healthMetricsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  healthTitle: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  healthUpdated: {
    color: "white",
    fontSize: 10,
    lineHeight: 12,
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
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#343A40",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  flatListContainer: {
    gap: 12,
    paddingVertical: 10,
  },
  categoryOption: {
    width: 160,
    height: 180,
    justifyContent: "flex-end",
    padding: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
  categoryImage: {
    borderRadius: 12,
  },
  catText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
