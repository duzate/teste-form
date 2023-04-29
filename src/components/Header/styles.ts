import { StyleSheet } from 'react-native'
import { theme } from '../../Global/styles/theme'
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    marginTop: 20
  },
  titleHeader: {
    fontFamily: theme.fonts.text700,
    fontSize: 28,
    textAlign: 'center',
    color: theme.colors.primary
  }
})