import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  handlePress?: () => void;
  text?: string;
  buttonStyle?: {};
  textStyle?: {};
};

export default function MyButton({
  handlePress,
  text,
  buttonStyle,
  textStyle,
}: Props) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={handlePress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
