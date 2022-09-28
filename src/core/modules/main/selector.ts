import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../store/root-reducer";

const mainState = (s: State) => s.main;
export const getTheme = createSelector(mainState, (s) => s.theme);
export const getLanguage = createSelector(mainState, (s) => s.language);
