import React, { FC, ReactNode } from "react";

interface GameLayoutProps {
  backLink: ReactNode;
  title: ReactNode;
  gameInfo: ReactNode;
  playersList: ReactNode;
  actions: ReactNode;
  gameMoveInfo: ReactNode;
  gameCells: ReactNode;
}

export const GameLayout: FC<GameLayoutProps> = ({
  backLink,
  title,
  gameInfo,
  playersList,
  actions,
  gameMoveInfo,
  gameCells,
}) => {
  return (
    <div className="pb-10 max-w-[616px] mx-auto">
      <div className="pl-2  text-xs leading-tight ">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between"
        }>
        {playersList}
      </div>
      <div className={"mt-6 bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"}>
        <div className="flex items-center gap-3">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] mt-3 pl-px pt-px">
          {gameCells}
        </div>
      </div>
    </div>
  );
};
