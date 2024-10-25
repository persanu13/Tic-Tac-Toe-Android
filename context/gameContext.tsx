import React, { createContext, useState, useContext, ReactNode } from "react";
import { GameMode, PlayerType } from "@/logic/game";

type gameType = {
  tableSize: number;
  mode: GameMode;
  firstPlayer: PlayerType;
};

// 1. Definirea tipului pentru context (stare și funcții)
interface IGameContext {
  gameState: gameType;
  setTableSize: (tableSize: number) => void;
  setMode: (mode: GameMode) => void;
  setFirstPlayer: (playerType: PlayerType) => void;
}

// 2. Inițializarea contextului (cu `undefined` la început pentru a obliga folosirea în interiorul provider-ului)
const GameContext = createContext<IGameContext | undefined>(undefined);

// 3. Definirea provider-ului
export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<gameType>({
    tableSize: 0,
    mode: GameMode.None,
    firstPlayer: PlayerType.None,
  });
  const setTableSize = (newTableSize: number) => {
    setGameState((prevState) => ({
      ...prevState,
      tableSize: newTableSize,
    }));
  };

  const setMode = (newMode: GameMode) => {
    setGameState((prevState) => ({
      ...prevState,
      mode: newMode,
    }));
  };

  const setFirstPlayer = (newFirstPlayer: PlayerType) => {
    setGameState((prevState) => ({
      ...prevState,
      firstPlayer: newFirstPlayer,
    }));
  };

  return (
    <GameContext.Provider
      value={{ gameState, setTableSize, setMode, setFirstPlayer }}
    >
      {children}
    </GameContext.Provider>
  );
}

// 4. Hook personalizat pentru a consuma contextul
export function useGameContext(): IGameContext {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GlobalProvider");
  }
  return context;
}
