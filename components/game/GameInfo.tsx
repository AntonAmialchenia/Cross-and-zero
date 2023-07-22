import { GameSymbol } from "./GameSymbol";
import { FC } from "react";

interface GameInfoProps {
  isDraw: boolean;
  winnerSymbol: string;
  currentStep: string;
}

export const GameInfo: FC<GameInfoProps> = ({
  isDraw,
  winnerSymbol,
  currentStep,
}) => {
  if (isDraw) {
    return <div className="mb-2.5">Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-2.5">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-2.5">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
};
