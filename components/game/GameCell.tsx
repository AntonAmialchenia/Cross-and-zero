import { FC, ReactNode } from "react";

interface GameCellProps {
  children?: ReactNode;
  i: number;
  onClick: () => void;
}

export const GameCell: FC<GameCellProps> = ({ children, i, onClick }) => {
  return (
    <button
      onClick={onClick}
      key={i}
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
};
