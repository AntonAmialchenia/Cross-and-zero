import { FC, ReactNode } from "react";

interface GameGridProps {
  children: ReactNode;
}

export const GameGrid: FC<GameGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] mt-3 pl-px pt-px">
      {children}
    </div>
  );
};
