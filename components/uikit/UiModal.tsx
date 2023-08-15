/* eslint-disable react/display-name */
import clsx from "clsx";
import React, { PropsWithChildren, SyntheticEvent } from "react";
import { CrossLightIcon } from "../GameNew/UI/icons/CrossLightIcon";
import { createPortal } from "react-dom";

interface UiModalProps extends PropsWithChildren {
  width: "md" | "full";
  className: string;
  isOpen: boolean;
  onClose: () => void;
}

export const UiModal = ({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}: PropsWithChildren<UiModalProps>) => {
  const handleClick = (e: SyntheticEvent<HTMLDivElement>) => {
    const inModal = (e.target as HTMLElement).closest("[data-id=modal]");
    if (!inModal) return;

    onClose();
  };
  if (!isOpen) {
    return null;
  }
  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10 overflow-y-auto",
        className,
      )}>
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-[320px] mx-auto relative",
          "flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: " mx-5",
          }[width],
        )}>
        {children}
        <button
          className="
         w-8 h-8 flex items-center justify-center
         bg-white/10 rounded hover:bg-white/40 
         transition-colors absolute top-0 left-[calc(100%+12px)]"
          onClick={onClose}>
          <CrossLightIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById("modals")!);
};

interface Props {
  className: string;
}

UiModal.Header = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={clsx(className, "px-6 pt-6 text-2xl")}>{children}</div>
  );
};

UiModal.Body = ({ children, className }: PropsWithChildren<Props>) => {
  return <div className={clsx(className, "px-6")}>{children}</div>;
};

UiModal.Footer = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={clsx(className, "mt-auto p-6 flex gap-4 justify-end")}>
      {children}
    </div>
  );
};
