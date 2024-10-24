import { useRouter, Link } from "expo-router";
import { View, Text, StyleSheet, StatusBar, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "@/constants/Style";

import MyButton from "@/components/MyButton";
import { useGameContext } from "@/context/gameContext";

export default function gameModeScreen() {
  const { gameState, setTableSize } = useGameContext();
  const router = useRouter();

  const handlePress = (size: number) => {
    setTableSize(size);
    router.push("/playerType");
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
        <View style={{ flexDirection: "row", position: "relative" }}>
          <Link href="/" style={{ position: "absolute", left: -35 }}>
            <Icon
              name="arrow-back-circle-outline"
              size={30}
              style={{ color: "red" }}
            />
          </Link>
          <Text style={styles.step}>Step 1: choose field mode</Text>
        </View>
        <MyButton
          text="Single Player"
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          handlePress={() => {
            handlePress(3);
          }}
        ></MyButton>
        <MyButton
          text="Multi Player"
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        ></MyButton>
      </View>
    </SafeAreaView>
  );
}
