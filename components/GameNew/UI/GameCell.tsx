import clsx from "clsx";
import { FC, ReactNode } from "react";
import { GameSymbol } from "./GameSymbol";

interface GameCellProps {
  i: number;
  onClick: () => void;
  isWinner: boolean;
  disabled: boolean;
  symbol: ReactNode;
}

export const GameCell: FC<GameCellProps> = ({
  i,
  onClick,
  isWinner,
  disabled,
  symbol,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      key={i}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}>
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
};
