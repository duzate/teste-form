import { StyleSheet } from "react-native";
import { theme } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    /*
    marginLeft: 10,
    marginRight: 10,
    */
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0.5,
    borderColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonIcon: {
    backgroundColor: theme.colors.white,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIconInnerIcon: {
    height: 25,
    width: 25,
    backgroundColor: theme.colors.primary,
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  radioButtonText: {
    fontSize: 18,
  },
})