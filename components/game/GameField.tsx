import React, { FC } from "react";
import { UiButton } from "../uikit/UiButton";
import { GameSymbol } from "./GameSymbol";
import { GameFieldLayout } from "./GameFieldLayout";
import { GameMoveInfo } from "./GameMoveInfo";
import { GameGrid } from "./GameGrid";
import { GameCell } from "./GameCell";
import { useGameState } from "./hooks/useGameState";

interface GameFieldProps {
  className: string;
  playersCount: number;
}

export const GameField: FC<GameFieldProps> = ({ className, playersCount }) => {
  const { cells, nextMove, handleCellClick, currentMove } =
    useGameState(playersCount);

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
