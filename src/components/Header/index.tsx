import { View, Text } from 'react-native'
import { styles } from './styles'
export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>
        Pesquisa de Satisfação de Clientes
      </Text>
    </View>
  )
}