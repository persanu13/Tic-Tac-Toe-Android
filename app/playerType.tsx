import { useRouter, Link } from "expo-router";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "@/constants/Style";

import { useGameContext } from "@/context/gameContext";

import { PlayerType } from "@/logic/game";

export default function gameModeScreen() {
  const { setFirstPlayer } = useGameContext();
  const router = useRouter();

  const handlePress = (firstPlayer: PlayerType) => {
    setFirstPlayer(firstPlayer);
    router.push("/gamePage");
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
          <Link href="/gameMode" style={styles.backLink}>
            <Icon name="arrow-back-circle-outline" style={styles.backArrow} />
          </Link>
          <Text style={styles.step}>Step 3: choose start player</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.letterButton}
            onPress={() => {
              handlePress(PlayerType.X);
            }}
          >
            <Image
              style={styles.letterImage}
              resizeMode="center"
              source={require(`../assets/images/x.png`)}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.letterButton}
            onPress={() => {
              handlePress(PlayerType.O);
            }}
          >
            <Image
              style={styles.letterImage}
              resizeMode="center"
              source={require(`../assets/images/o.png`)}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
