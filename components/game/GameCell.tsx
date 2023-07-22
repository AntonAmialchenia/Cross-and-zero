import { FC } from "react";
import { GameSymbol } from "./GameSymbol";
import { clsx } from "clsx";

interface GameCellProps {
  isWinner: boolean | undefined;
  onClick: () => void;
  symbol: string | null;
}

export const GameCell: FC<GameCellProps> = ({ isWinner, onClick, symbol }) => {
  return (
    <button
      className={clsx(
        "border border-gray-500 -mt-px -ml-px flex items-center justify-center",
        isWinner && "bg-red-200",
      )}
      onClick={onClick}>
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
};
