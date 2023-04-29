import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "../RadioButton";
import { options } from "../../util/option";
import { questions } from "../../util/question";

interface RadioButtonContainerProps {
  optionSelected: string,
  onPress: (radioId: string) => void,
}

export const RadioButtonContainer = ({ optionSelected, onPress }: RadioButtonContainerProps) => {
  const _renderRadioButtons = () => {
    return options.map((listItem) => (
      <RadioButton
        key={listItem.id}
        isChecked={listItem.id === optionSelected}
        text={listItem.title}
        onPress={() => onPress(listItem.id)}
      />
    ));
  };
  return <View>{_renderRadioButtons()}</View>;
}