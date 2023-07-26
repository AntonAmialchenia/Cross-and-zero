import clsx from "clsx";
import React, { FC } from "react";
import { Zero } from "./icons/Zero";
import { Cross } from "./icons/Cross";
import { UiButton } from "../uikit/UiButton";

interface GameFieldProps {
  className: string;
}

const cells = new Array(19 * 19).fill(null);

export const GameField: FC<GameFieldProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}>
      <div className="flex items-center gap-3">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
            Ход: <Zero className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
            Следующий: <Cross />
          </div>
        </div>
        <UiButton size="md" variant="primary">
          Ничья
        </UiButton>
        <UiButton size="md" variant="outline">
          Сдаться
        </UiButton>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] mt-3 pl-px pt-px">
        {cells.map((_, i) => (
          <button
            key={i}
            className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
            <Zero className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
};
