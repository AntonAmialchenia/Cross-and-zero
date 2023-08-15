import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { GameSymbol } from "./GameSymbol";
import clsx from "clsx";

interface PlayerInfoProps {
  name: string;
  rating: string;
  avatar: StaticImageData;
  symbol: string;

  isRight: boolean;
  isTimerRunning: boolean;
  seconds: number;
}

export const PlayerInfo: FC<PlayerInfoProps> = ({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isTimerRunning,

  seconds,
}) => {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;
  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? " text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  };
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx(" relative", isRight && "order-3")}>
        <div
          className={"flex items-center gap-2 text-start text-teal-600 w-44"}>
          <Image src={avatar} alt="Avatar" width={48} height={48} unoptimized />
          <div className=" overflow-hidden">
            <div className=" text-lg leading-tight truncate">{name}</div>
            <div className=" text-xs leading-tight text-slate-400">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-5 h-5 bg-white shadow rounded-full absolute -left-1 -top-1">
          <GameSymbol className="" symbol={symbol} />
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
