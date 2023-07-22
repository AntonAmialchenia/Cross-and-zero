import { FC } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

interface GameSymbolProps {
  symbol: string;
}

export const GameSymbol: FC<GameSymbolProps> = ({ symbol }) => {
  const getSymbolClassName = (symbol: string) => {
    if (symbol === SYMBOL_O) return "text-green-600";
    if (symbol === SYMBOL_X) return "text-red-400";
    return "";
  };
  return (
    <span className={`text-xl ${getSymbolClassName(symbol)}`}>{symbol}</span>
  );
};
