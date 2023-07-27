import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Avatar from "../Profile/img/1.png";
import clsx from "clsx";

interface ProfileProps {
  className?: string;
  name?: string;
  rating?: string;
  avatar?: StaticImageData;
}

export const Profile: FC<ProfileProps> = ({
  className,
  name,
  rating,
  avatar = Avatar,
}) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600 ",
      )}>
      <Image src={avatar} alt="Avatar" width={48} height={48} unoptimized />
      <div className=" overflow-hidden">
        <div className=" text-lg leading-tight truncate">{name}</div>
        <div className=" text-xs leading-tight text-slate-400">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
};
