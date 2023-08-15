import React, { FC } from "react";
import { Star } from "./icons/Star";
import { User } from "./icons/User";
import { Time } from "./icons/Time";

interface GameInfoProps {
  isRatingGame: boolean;
  playersCount: number;
  timeMode: string;
  // currentMove: string;
  // isWinner: boolean;
  // onPlayerTimeOver: (symbol: string) => void;
}

export const GameInfo: FC<GameInfoProps> = ({
  playersCount,
  timeMode,
  isRatingGame,
}) => {
  return (
    <div className="flex items-center gap-3 text-xs leading-tight text-slate-400">
      {isRatingGame && <Star />}
      <div className="flex items-center gap-1">
        <User />
        {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <Time />
        {timeMode}
      </div>
    </div>
  );
};
