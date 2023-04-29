import { StyleSheet } from "react-native";
import { theme } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  },
  banner: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer: {
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',

  },
  formContainer: {
    backgroundColor: theme.colors.white,
    width: '90%',
    height: '90%',
    borderRadius: 20
  },

  section: {
    width: '100%',
    height: '80%',
    padding: 20,
  },

  button: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})