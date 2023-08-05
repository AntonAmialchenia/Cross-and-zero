import { FC, useState } from "react";
import { Header } from "../components/Header";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/Game";
import { GameSymbol } from "../components/Game/GameSymbol";

const HomePage: FC = () => {
  const [playersCount] = useState(4);
  const {
    cells,
    nextMove,
    handleCellClick,
    currentMove,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);
  return (
    <div className=" bg-slate-50 min-h-screen">
      <Header />
      <main className=" pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          currentMove={currentMove}
          playersCount={playersCount}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
          className="mt-4"
        />
        {winnerSymbol && (
          <div>
            <GameSymbol className="mt-4" symbol={winnerSymbol} />
          </div>
        )}

        <GameField
          cells={cells}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          currentMove={currentMove}
          playersCount={playersCount}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          className="mt-6"
        />
      </main>
    </div>
  );
};
export default HomePage;
