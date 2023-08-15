import React, { FC } from "react";
import { GameLayout } from "./UI/GameLayout";
import { BackLink } from "./UI/BackLink";
import { GameTitle } from "./UI/GameTitle";
import { GameInfo } from "./UI/GameInfo";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./UI/PlayerInfo";
import { GameMoveInfo } from "./UI/GameMoveInfo";
import { GameCell } from "./UI/GameCell";
import { useGameState } from "./hooks/useGameState";
import { GameOverModal } from "./UI/GameOverModal";

const PLAYERS_COUNT = 4;

export const Game: FC = () => {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    winnerSymbol,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        actions
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode="1 мин. на ход" />
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
            onClick={() => handleCellClick(index)}
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
