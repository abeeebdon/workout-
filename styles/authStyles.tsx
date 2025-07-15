import { StyleSheet } from "react-native";
import { colors } from "../constants/Colors";
export const loginStyles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.81)", // 25% dark overlay
  },
  container: {
    zIndex: 1,
    padding: 15,
  },
  heading: {
    color: "blue",
    fontSize: 24,
    paddingTop: 15,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: 16,
    color: "#111111B2",
    marginTop: 8,
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    display: "flex",
    gap: 30,
    marginTop: 60,
    paddingTop: 60,
  },

  input: {
    width: "85%",
    padding: 12,
    paddingRight: 40,
    borderBottomWidth: 1,
    fontSize: 14,
    borderColor: "#6C757D",
    color: "#343A40",
    borderRadius: 8,
    textAlign: "center",
  },
  passwordContainer: {
    position: "relative",
    width: "85%",
    display: "flex",
    borderBottomWidth: 1,
    borderColor: "#6C757D",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  eyeIcon: {},
  submitContainer: {
    margin: 16,
    marginTop: 30,
    backgroundColor: colors.primary,
    padding: 6,
    borderRadius: 12,
  },
  submitBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  forgotPassword: {
    margin: 16,
    marginTop: 8,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#6C757D",
    fontSize: 16,
    lineHeight: 20,
  },
  orContainer: {
    marginTop: 30,
  },
  linkSignup: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
  },
  DontText: {
    color: "#6C757D",
    fontSize: 16,
  },
});

export const signupStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  headingContainer: {
    padding: 15,
  },
  heading: {
    color: "blue",
    fontSize: 24,
    paddingTop: 15,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: 16,
    color: "#111111B2",
    marginTop: 8,
  },
  inputContainer: {
    padding: 16,
    gap: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
    textTransform: "capitalize",
  },
  input: {
    width: "100%",
    padding: 12,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  submitContainer: {
    margin: 16,
    marginTop: 20,
    backgroundColor: colors.primary,

    padding: 6,
    borderRadius: 12,
  },
  submitBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  linkSignup: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
  },
  DontText: {
    color: "#6C757D",
    fontSize: 16,
  },
});
