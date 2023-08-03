import { MOVE_ORDER } from "../constants";

export const getNextMove = (currentMove: string, playersCount: number) => {
  const sliceMoveOrder = MOVE_ORDER.slice(0, playersCount);

  const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1;
  return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0];
};
