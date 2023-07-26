import { FC } from "react";
import { Header } from "../components/Header";
import { GameField, GameInfo, GameTitle } from "../components/Game";

const HomePage: FC = () => {
  return (
    <div className=" bg-slate-50 min-h-screen">
      <Header />
      <main className=" pt-6 mx-auto w-max">
        <GameTitle />
        <GameInfo className="mt-4" />
        <GameField className="mt-6" />
      </main>
    </div>
  );
};
export default HomePage;
