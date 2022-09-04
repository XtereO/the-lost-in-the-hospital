import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const mainState = (s: AppState) => s.main;
export const getTheme = createSelector(mainState, (s) => s.theme);
export const getLanguage = createSelector(mainState, (s) => s.language);
