import React, { FC } from "react";
import Image from "next/image";
import LogoSrc from "./logo.svg";
import { Profile } from "../Profile";
import { ArrowDown } from "./icons/ArrowDown";

export const Header: FC = () => {
  return (
    <header className="flex items-center h-24 px-8 bg-white shadow-lg">
      <Image src={LogoSrc} alt="Logo" />
      <div className="w-px h-8 bg-slate-200 mx-8" />
      <button className=" w-48 bg-teal-600 rounded-lg px-5 py-2 text-2xl text-white leading-tight hover:bg-teal-500 transition-colors">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2  text-teal-600 ">
        <Profile />
        <ArrowDown />
      </button>
    </header>
  );
};
