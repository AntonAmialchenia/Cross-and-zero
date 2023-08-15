import { FC } from "react";
import { Header } from "../components/Header";
import { Game } from "../components/GameNew";
import { HomePageLayout } from "../layout";

const HomePage: FC = () => {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
};

export default HomePage;
