import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type ButtonProps = TouchableOpacityProps & {
  title?: string
}


export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}