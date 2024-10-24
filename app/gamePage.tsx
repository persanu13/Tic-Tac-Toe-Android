import { useRouter, Link } from "expo-router";
import { View, Text, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useRef } from "react";

import { styles } from "@/constants/Style";

import { useGameContext } from "@/context/gameContext";

import { TicTacToeLogic, Point, PlayerType } from "@/logic/game";

import Square from "@/components/Square";

export default function GameScreen() {
  const { gameState } = useGameContext();
  const gameLogic = useRef(
    new TicTacToeLogic(gameState.tableSize, PlayerType.X)
  );

  const [table, setTable] = useState<PlayerType[][]>(
    gameLogic.current.getGameTable()
  );

  const squarePress = (point: Point) => {
    if (gameLogic.current.move(point)) {
      if (gameLogic.current.getGameEnd()) {
        console.log("END");
      }
      setTable(gameLogic.current.getGameTable());
    } else {
      console.log("incorect move");
    }
  };

  const reset = () => {
    gameLogic.current.resetGame();
    setTable(gameLogic.current.getGameTable());
    console.log("RESET");
  };

  const renderTable = table.map((line, lineIndex) => (
    <View style={styles.line} key={lineIndex}>
      {line.map((element, colIndex) => (
        <Square
          key={colIndex}
          coordonates={{ x: colIndex, y: lineIndex }}
          value={element}
          handlePress={squarePress}
          gameEnd={gameLogic.current.getGameEnd()}
        ></Square>
      ))}
    </View>
  ));

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.gameContainer}>
        <View style={styles.table}>{renderTable}</View>
      </View>
      <Button title="Reset" onPress={reset}></Button>
    </SafeAreaView>
  );
}
