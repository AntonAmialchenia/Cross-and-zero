import React, { FC, useReducer } from "react";
import { GameLayout } from "./UI/GameLayout";
import { BackLink } from "./UI/BackLink";
import { GameTitle } from "./UI/GameTitle";
import { GameInfo } from "./UI/GameInfo";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./UI/PlayerInfo";
import { GameMoveInfo } from "./UI/GameMoveInfo";
import { GameCell } from "./UI/GameCell";
import { GameOverModal } from "./UI/GameOverModal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./utils/gameStateReducer";
import { getNextMove } from "./utils/getNextMove";
import { computedWinner } from "./utils/computedWinner";
import { computedWinnerSymbol } from "./utils/computedWinnerSymbol";

const PLAYERS_COUNT = 4;

export const Game: FC = () => {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState,
  );

  const nextMove = getNextMove(gameState);
  const winnerSequence = computedWinner(gameState);
  const winnerSymbol = computedWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const { currentMove, cells } = gameState;

  return (
    <>
      <GameLayout
        actions
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={2} timeMode="1 мин. на ход" />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            isTimerRunning
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            seconds={60}
            isRight={index % 2 === 1}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            disabled={!!winnerSymbol}
            i={index}
            isWinner={
              Array.isArray(winnerSequence)
                ? winnerSequence?.includes(index)
                : false
            }
            onClick={() =>
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                payload: index,
              })
            }
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            isTimerRunning
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            seconds={60}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
};
