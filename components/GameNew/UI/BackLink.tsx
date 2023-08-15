import Link from "next/link";
import React from "react";
import { ArrowLeft } from "./icons/ArrowLeft";

export const BackLink = () => {
  return (
    <Link
      href="#"
      className=" flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors -mb-0.5">
      <ArrowLeft />
      На главную
    </Link>
  );
};
