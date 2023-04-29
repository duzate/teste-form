import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'
import { styles } from './styles'

type RadioButtonProps = TouchableOpacityProps & {
  text: string,
  isChecked: boolean
}

export const RadioButton = ({ text, isChecked, ...rest }: RadioButtonProps) => {

  return (
    <TouchableOpacity style={styles.mainContainer} {...rest}>
      <View style={styles.radioButtonIcon}>
        {isChecked
          ? <View style={styles.radioButtonIconInnerIcon} />
          : ''
        }
      </View>
      <View style={styles.radioButtonTextContainer}>
        <Text style={styles.radioButtonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}