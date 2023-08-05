import { clsx } from "clsx";
import { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";
import { Profile } from "../Profile";
import { GameSymbol } from "./GameSymbol";

interface PlayerInfoProps {
  playerInfo: {
    id: number;
    name: string;
    rating: string;
    avatar: StaticImageData;
    symbol: string;
  };
  isRight: boolean;
  isTimerRunning: boolean;
  onTimeOver: () => void;
}

export const PlayerInfo: FC<PlayerInfoProps> = ({
  playerInfo,
  isRight,
  isTimerRunning,
  onTimeOver,
}) => {
  const [seconds, setSeconds] = useState(6);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? " text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  };

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((prev) => Math.max(prev - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(6);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx(" relative", isRight && "order-3")}>
        <Profile
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
          className="w-44"
        />
        <div className="flex justify-center items-center w-5 h-5 bg-white shadow rounded-full absolute -left-1 -top-1">
          <GameSymbol className="" symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx("w-px h-6 bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          " text-lg font-semibold leading-tight",
          isRight && "order-1",
          getTimerColor(),
        )}>
        {minutesString}:{secondsString}
      </div>
    </div>
  );
};
