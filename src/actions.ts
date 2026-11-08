import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
  name: "mood",

  initialState: {
    happyCount: 0,
    sadCount: 0,
  },

  reducers: {
    incrementHappy: (state) => {
      state.happyCount += 1;
    },

    incrementSad: (state) => {
      state.sadCount += 1;
    },
  },
});

export const { incrementHappy, incrementSad } = moodSlice.actions;

export default moodSlice.reducer;
