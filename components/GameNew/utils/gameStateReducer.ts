import { Reducer } from "react";
import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "./getNextMove";
import { InitGameState } from "../../../interfaces";

type ActionType<T> = {
  type: string;
  payload: T;
};

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export const initGameState = ({ playersCount }: { playersCount: number }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersTimeOver: [] as string[],
  playersCount,
});

export const gameStateReducer: Reducer<InitGameState, ActionType<number>> = (
  state,
  action,
) => {
  const index = action.payload;
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(state),
        cells: state.cells.map((cell, i) =>
          i === index ? state.currentMove : cell,
        ),
      };
    }
    default: {
      return state;
    }
  }
};
