import { MOVE_ORDER } from "../../GameNew/constants";

export const getNextMove = (
  currentMove: string,
  playersCount: number,
  playersTimeOver: string[],
) => {
  // filter удаляет символ игрока у которого закончилось время
  const sliceMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );

  const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1;
  return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0];
};
