import React, { FC } from "react";

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton: FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button
      className="cursor-pointer mt-2.5 bg-transparent border border-gray-500 py-1 px-3 rounded"
      onClick={onClick}>
      Сбросить
    </button>
  );
};
