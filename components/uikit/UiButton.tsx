import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface UiButtonProps {
  children: ReactNode;
  className?: string;
  size: "md" | "lg";
  variant: "primary" | "outline";
}

export const UiButton: FC<UiButtonProps> = ({
  children,
  className,
  size,
  variant,
}) => {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "rounded px-6 py-2 text-sm leading-tight",
      lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500 ",
      outline: " border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonClassName}>{children}</button>;
};
