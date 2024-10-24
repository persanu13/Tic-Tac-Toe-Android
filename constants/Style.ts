import { StyleSheet, Dimensions } from "react-native";

export const colors = {
  red: "#BB1380",
  blue: "#0D6DA5",
  green: "#46D312",
  white: "EFEFEF",
  black: "383838",
};

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  image: {
    flex: 2,
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  step: {
    color: colors.red,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.blue,
    width: 180,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 2,
    borderStyle: "dashed",
  },
  buttonText: {
    fontFamily: "Inter",
    fontWeight: "semibold",
    fontSize: 25,
  },
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    height: screenWidth * 0.8,
    width: screenWidth * 0.8,
    gap: 10,
  },
  line: {
    flexDirection: "row",
    flex: 1,
    gap: 10,
  },
  square: {
    flex: 1,
    borderColor: colors.black,
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  squareText: {
    fontSize: 55,
    fontFamily: "Inter",
  },
});
