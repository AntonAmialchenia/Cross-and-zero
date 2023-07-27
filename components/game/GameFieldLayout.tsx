import { FC, ReactNode } from "react";
import clsx from "clsx";

interface GameFieldLayoutProps {
  children: ReactNode;
  className: string;
}

export const GameFieldLayout: FC<GameFieldLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}>
      {children}
    </div>
  );
};
