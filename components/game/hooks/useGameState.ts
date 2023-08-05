import { useState } from "react";
import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "../utils/getNextMove";
import { computedWinner } from "../utils/computedWinner";

export const useGameState = (playersCount: number) => {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [] as string[],
    }),
  );

  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
  const winnerSequence = computedWinner(cells);

  const winnerSymbol =
    nextMove === currentMove
      ? currentMove
      : winnerSequence
      ? winnerSequence[0]
      : false;

  console.log(winnerSymbol);

  const handleCellClick = (index: number) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol: string) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
      };
    });
  };

  return {
    cells,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    currentMove,
    winnerSequence,
    winnerSymbol,
  };
};
