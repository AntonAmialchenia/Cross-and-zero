import clsx from "clsx";
import React, { FC } from "react";

import { PlayerInfo } from "./PlayerInfo";
import { GAME_SYMBOLS } from "./constants";

import avatar1 from "../Profile/img/1.png";
import avatar2 from "../Profile/img/2.png";
import avatar3 from "../Profile/img/3.png";
import avatar4 from "../Profile/img/4.png";

const players = [
  {
    id: 1,
    name: "Paromovevg",
    rating: "1230",
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rating: "850",
    avatar: avatar2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Lara",
    rating: "1400",
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRINGLE,
  },
  {
    id: 4,
    name: "Додик",
    rating: "760",
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];
interface GameInfoProps {
  className: string;
  playersCount: number;
  currentMove: string;
  isWinner: boolean;
  onPlayerTimeOver: (symbol: string) => void;
}

export const GameInfo: FC<GameInfoProps> = ({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) => {
  return (
    <div
      className={clsx(
        className,
        " bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between",
      )}>
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
          isTimerRunning={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
};
