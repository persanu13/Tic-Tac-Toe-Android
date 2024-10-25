import { useRouter, Link } from "expo-router";
import { View, Text, StatusBar, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "@/constants/Style";

import MyButton from "@/components/MyButton";
import { useGameContext } from "@/context/gameContext";

import { GameMode } from "@/logic/game";

export default function gameModeScreen() {
  const { setMode } = useGameContext();
  const router = useRouter();

  const handlePress = (mode: GameMode) => {
    setMode(mode);
    router.push("/playerType");
  };
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar hidden={true} />
      <Image
        style={styles.backroundImage}
        resizeMode="cover"
        source={require("../assets/images/background_image.png")}
      />
      <View style={styles.container}>
        <View style={styles.stepContainer}>
          <Link href="/" style={styles.backLink}>
            <Icon name="arrow-back-circle-outline" style={styles.backArrow} />
          </Link>
          <Text style={styles.step}>Step 2: choose game mode</Text>
        </View>
        <MyButton
          text="Single Player"
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          handlePress={() => {
            handlePress(GameMode.SinglePlayer);
          }}
        ></MyButton>
        <MyButton
          text="Multi Player"
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          handlePress={() => {
            handlePress(GameMode.MultiPlayer);
          }}
        ></MyButton>
      </View>
    </SafeAreaView>
  );
}
