import { FC, useState } from "react";
import { Header } from "../components/Header";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/Game";

const HomePage: FC = () => {
  const [playersCount] = useState(4);
  const { cells, nextMove, handleCellClick, currentMove } =
    useGameState(playersCount);
  return (
    <div className=" bg-slate-50 min-h-screen">
      <Header />
      <main className=" pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          currentMove={currentMove}
          playersCount={playersCount}
          className="mt-4"
        />
        <GameField
          cells={cells}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          currentMove={currentMove}
          playersCount={playersCount}
          className="mt-6"
        />
      </main>
    </div>
  );
};
export default HomePage;
