import { create } from 'zustand';

export type Difficulty = 'easy' | 'medium' | 'hard';
export type ColorMode = 'rgb' | 'hex';

interface GameState {
  score: number;
  attempts: number;
  difficulty: Difficulty;
  colorMode: ColorMode;
  soundEnabled: boolean;
  colorBlindMode: boolean;
  setScore: (score: number) => void;
  incrementScore: () => void;
  incrementAttempts: () => void;
  setDifficulty: (difficulty: Difficulty) => void;
  setColorMode: (mode: ColorMode) => void;
  toggleSound: () => void;
  toggleColorBlindMode: () => void;
  resetStats: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  score: 0,
  attempts: 0,
  difficulty: 'medium',
  colorMode: 'rgb',
  soundEnabled: true,
  colorBlindMode: false,
  setScore: (score) => set({ score }),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  incrementAttempts: () => set((state) => ({ attempts: state.attempts + 1 })),
  setDifficulty: (difficulty) => set({ difficulty }),
  setColorMode: (colorMode) => set({ colorMode }),
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  toggleColorBlindMode: () => set((state) => ({ colorBlindMode: !state.colorBlindMode })),
  resetStats: () => set({ score: 0, attempts: 0 }),
}));