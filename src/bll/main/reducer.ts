import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language, Theme } from "../../types";

type InitialState = {
  theme: Theme;
  language: Language;
};

const initialState: InitialState = {
  theme: "light",
  language: "ru",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;
