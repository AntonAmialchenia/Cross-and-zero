import React, { FC } from "react";
import Image from "next/image";
import Avatar from "./avatar.png";
import clsx from "clsx";

interface ProfileProps {
  className?: string;
}

export const Profile: FC<ProfileProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600 ",
      )}>
      <Image src={Avatar} alt="Avatar" width={48} height={48} unoptimized />
      <div>
        <div className=" text-lg leading-tight">Paromovevg</div>
        <div className=" text-xs leading-tight text-slate-400">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
};
