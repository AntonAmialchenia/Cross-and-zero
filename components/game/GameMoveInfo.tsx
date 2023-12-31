import { FC, ReactNode } from "react";
import { GameSymbol } from "../GameNew/UI/GameSymbol";

interface GameMoveInfoProps {
  actions: ReactNode;
  currentMove: string;
  nextMove: string;
}

export const GameMoveInfo: FC<GameMoveInfoProps> = ({
  actions,
  currentMove,
  nextMove,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
          Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
};
