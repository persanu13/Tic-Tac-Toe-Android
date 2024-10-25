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

  backroundImage: {
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
    borderRadius: 5,
    borderColor: colors.black,
    borderWidth: 2,
    // Shadow for Android
    elevation: 6,
  },

  buttonText: {
    fontFamily: "Inter",
    fontWeight: "semibold",
    fontSize: 25,
  },
  stepContainer: {
    flexDirection: "row",
    position: "relative",
  },
  backLink: {
    position: "absolute",
    left: -35,
  },
  gameBackLink: {
    position: "absolute",
    left: 10,
    top: 10,
  },

  backArrow: {
    color: colors.red,
    fontSize: 30,
  },

  rowContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 35,
  },

  letterButton: {
    height: "50%",
    width: "30%",
  },

  letterImage: {
    flex: 1,
    width: "100%",
    elevation: 6,
  },

  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
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
    borderRadius: 2,
    elevation: 2,
  },

  squareText: {
    fontSize: 55,
    fontFamily: "Inter",
  },
});
