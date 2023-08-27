export interface InitGameState {
  cells: (string | null)[];
  currentMove: string;
  playersTimeOver: string[];
  playersCount: number;
}
