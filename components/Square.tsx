import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { styles } from "@/constants/Style";

import { PlayerType, Point, PlayerTypeToString } from "@/logic/game";

type Props = {
  value: PlayerType;
  coordonates: Point;
  gameEnd: boolean;
  handlePress: (point: Point) => void;
};

export default function Square({
  handlePress,
  value,
  coordonates,
  gameEnd,
}: Props) {
  const image = () => {
    if (value === PlayerType.None) return;
    if (value === PlayerType.X) {
      return (
        <Image
          style={{ flex: 1 }}
          resizeMode="center"
          source={require(`../assets/images/x.png`)}
        ></Image>
      );
    } else {
      return (
        <Image
          style={{ flex: 1 }}
          resizeMode="center"
          source={require(`../assets/images/o.png`)}
        ></Image>
      );
    }
  };
  return (
    <TouchableOpacity
      disabled={value !== PlayerType.None || gameEnd}
      style={styles.square}
      onPress={() => {
        handlePress(coordonates);
      }}
    >
      {image()}
    </TouchableOpacity>
  );
}
