import { useState } from 'react'
import { Text, View } from "react-native"
import { styles } from "./styles";
import { RadioButtonContainer } from '../RadioButtonContainer';

interface SectionProps {
  title?: string;
  currentPage?: string
}
export const Section = ({ title, currentPage }: SectionProps) => {
  const [formData, setFormData] = useState({
    vendedor: '',
    espera: '',
    entrega: '',
    caixa: ''
  });

  const [option, setOption] = useState('');

  const onRadioButtonPress = (optionId: string) => {
    optionId === option ? setOption('') : setOption(optionId);
  }
  return (
    <View>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.options}>
        <RadioButtonContainer
          optionSelected={option}
          onPress={onRadioButtonPress}
        />
      </View>
    </View>
  )
}