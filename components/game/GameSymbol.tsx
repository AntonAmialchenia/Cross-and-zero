import React, { FC } from "react";
import { GAME_SYMBOLS } from "./constants";
import { Cross } from "./icons/Cross";
import { Zero } from "./icons/Zero";
import { Tringle } from "./icons/Tringle";
import { Square } from "./icons/Square";

interface GameSymbolProps {
  symbol: string;
  className: string;
}

export const GameSymbol: FC<GameSymbolProps> = ({ symbol, className }) => {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: Cross,
      [GAME_SYMBOLS.ZERO]: Zero,
      [GAME_SYMBOLS.TRINGLE]: Tringle,
      [GAME_SYMBOLS.SQUARE]: Square,
    }[symbol] ?? Cross;
  return <Icon className={className} />;
};
