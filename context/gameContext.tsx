import React, { createContext, useState, useContext, ReactNode } from "react";

type gameType = {
  tableSize: number;
  mode: string;
  playerType: string;
};

// 1. Definirea tipului pentru context (stare și funcții)
interface IGameContext {
  gameState: gameType;
  setTableSize: (tableSize: number) => void;
  setMode: (mode: string) => void;
  setPlayerType: (playerType: string) => void;
}

// 2. Inițializarea contextului (cu `undefined` la început pentru a obliga folosirea în interiorul provider-ului)
const GameContext = createContext<IGameContext | undefined>(undefined);

// 3. Definirea provider-ului
export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<gameType>({
    tableSize: 5,
    mode: "",
    playerType: "",
  });
  const setTableSize = (newTableSize: number) => {
    setGameState((prevState) => ({
      ...prevState,
      tableSize: newTableSize,
    }));
  };

  const setMode = (newMode: string) => {
    setGameState((prevState) => ({
      ...prevState,
      mode: newMode,
    }));
  };

  const setPlayerType = (newPlayerType: string) => {
    setGameState((prevState) => ({
      ...prevState,
      playerType: newPlayerType,
    }));
  };

  return (
    <GameContext.Provider
      value={{ gameState, setTableSize, setMode, setPlayerType }}
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
