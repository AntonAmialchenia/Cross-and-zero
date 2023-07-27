import { clsx } from "clsx";
import { StaticImageData } from "next/image";
import { FC } from "react";
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
}

export const PlayerInfo: FC<PlayerInfoProps> = ({ playerInfo, isRight }) => {
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
        )}>
        00:08
      </div>
    </div>
  );
};
