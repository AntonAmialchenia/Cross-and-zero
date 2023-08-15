import React, { FC, ReactNode } from "react";
import { UiModal } from "../../uikit/UiModal";
import { UiButton } from "../../uikit/UiButton";

interface GameOverModalProps {
  winnerName: string | undefined;
  players: ReactNode;
}

export const GameOverModal: FC<GameOverModalProps> = ({
  winnerName,
  players,
}) => {
  return (
    <UiModal
      width="md"
      className=""
      isOpen={!!winnerName}
      onClose={() => console.log("close")}>
      <UiModal.Header className="">Игра завершена!</UiModal.Header>
      <UiModal.Body className="">
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid justify-between grid-cols-2 gap-2 mt-2">
          {players}
        </div>
      </UiModal.Body>
      <UiModal.Footer className="">
        <UiButton variant="outline" size="md">
          Вернуться
        </UiButton>
        <UiButton variant="primary" size="md">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
};
