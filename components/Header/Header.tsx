import React, { FC } from "react";
import Image from "next/image";
import LogoSrc from "./logo.svg";
import { Profile } from "../Profile";
import { ArrowDown } from "./icons/ArrowDown";
import { UiButton } from "../uikit/UiButton";

export const Header: FC = () => {
  return (
    <header className="flex items-center h-24 px-8 bg-white shadow-lg">
      <Image src={LogoSrc} alt="Logo" />
      <div className="w-px h-8 bg-slate-200 mx-8" />
      <UiButton className="w-44" size="lg" variant="primary">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2  text-teal-600 ">
        <Profile rating="1230" name="Paromovevg" />
        <ArrowDown />
      </button>
    </header>
  );
};
