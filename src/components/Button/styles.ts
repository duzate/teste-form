import { StyleSheet } from "react-native";
import { theme } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary
  },
  title: {
    fontFamily: theme.fonts.text700,
    color: theme.colors.white
  }
})