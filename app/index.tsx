import { useRouter, Link } from "expo-router";
import { View, Text, StyleSheet, StatusBar, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/constants/Style";

import MyButton from "@/components/MyButton";
import { useGameContext } from "@/context/gameContext";

import { TicTacToeLogic, Point, PlayerType } from "@/logic/game";

export default function HomeScreen() {
  const { gameState, setTableSize } = useGameContext();
  const router = useRouter();

  const handlePress = (size: number) => {
    setTableSize(size);
    router.push("/gamePage");
  };

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar hidden={true} />
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/images/background_image.png")}
      />

      <View style={styles.container}>
        <Text style={styles.step}>Step 1: choose field mode</Text>
        <MyButton
          text="3x3"
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          handlePress={() => {
            handlePress(3);
          }}
        ></MyButton>
        <MyButton
          text="5x5"
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          handlePress={() => {
            handlePress(5);
          }}
        ></MyButton>
      </View>
    </SafeAreaView>
  );
}