import { InitGameState } from "../../../interfaces";

export const computedWinnerSymbol = (
  gameState: InitGameState,
  {
    winnerSequence,
    nextMove,
  }: { winnerSequence: false | number[]; nextMove: string },
) => {
  return nextMove === gameState.currentMove
    ? gameState.currentMove
    : winnerSequence
    ? gameState.cells[winnerSequence[0]]
    : false;
};
