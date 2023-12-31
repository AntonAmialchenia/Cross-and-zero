import clsx from "clsx";
import { FC, ReactNode } from "react";

interface GameCellProps {
  children?: ReactNode;
  i: number;
  onClick: () => void;
  isWinner: boolean;
  disabled: boolean;
}

export const GameCell: FC<GameCellProps> = ({
  children,
  i,
  onClick,
  isWinner,
  disabled,
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
      {children}
    </button>
  );
};
