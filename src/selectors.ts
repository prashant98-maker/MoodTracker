import type { RootState } from "./store.ts";

export const selectHappyCount = (state: RootState) => state.mood.happyCount;

export const selectSadCount = (state: RootState) => state.mood.sadCount;
