import Link from "next/link";
import React, { FC } from "react";
import { ArrowLeft } from "./icons/ArrowLeft";
import { Star } from "./icons/Star";
import { User } from "./icons/User";
import { Time } from "./icons/Time";

interface GmaeTitleProps {
  playersCount: number;
}

export const GameTitle: FC<GmaeTitleProps> = ({ playersCount }) => {
  return (
    <div className="pl-2  text-xs leading-tight ">
      <Link
        href="#"
        className=" flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors -mb-0.5">
        <ArrowLeft />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight ">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-xs leading-tight text-slate-400">
        <Star />
        <div className="flex items-center gap-1">
          <User />
          {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <Time />1 мин на ход
        </div>
      </div>
    </div>
  );
};
