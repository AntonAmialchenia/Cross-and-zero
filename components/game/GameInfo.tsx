import clsx from "clsx";
import React, { FC } from "react";
import { Profile } from "../Profile";
import { Cross } from "./icons/Cross";

interface GameInfoProps {
  className: string;
}

export const GameInfo: FC<GameInfoProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        " bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between",
      )}>
      <div className="flex gap-3 items-center">
        <div className=" relative">
          <Profile className="w-44" />
          <div className="flex justify-center items-center w-5 h-5 bg-white shadow rounded-full absolute -left-1 -top-1">
            <Cross />
          </div>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className=" text-lg font-semibold leading-tight text-slate-900">
          01:08
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className=" text-lg font-semibold leading-tight text-orange-600">
          00:08
        </div>
        <div className=" relative">
          <Profile className="w-44" />
          <div className="flex justify-center items-center w-5 h-5 bg-white shadow rounded-full absolute -left-1 -top-1">
            <Cross />
          </div>
        </div>
        <div className="w-px h-6 bg-slate-200" />
      </div>
    </div>
  );
};
