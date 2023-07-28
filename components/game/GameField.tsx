import React, { FC } from "react";
import { UiButton } from "../uikit/UiButton";
import { GameSymbol } from "./GameSymbol";
import { GameFieldLayout } from "./GameFieldLayout";
import { GameMoveInfo } from "./GameMoveInfo";
import { GameGrid } from "./GameGrid";
import { GameCell } from "./GameCell";

interface GameFieldProps {
  className: string;
  playersCount: number;
  cells: any[];
  nextMove: string;
  handleCellClick: (index: number) => void;
  currentMove: string;
}

export const GameField: FC<GameFieldProps> = ({
  className,
  playersCount,
  cells,
  nextMove,
  handleCellClick,
  currentMove,
}) => {
  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton size="md" variant="outline">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            i={index}
            onClick={() => handleCellClick(index)}>
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};
