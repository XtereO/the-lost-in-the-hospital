import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "../modules/main";

export const rootReducer = combineReducers({
  main: mainReducer,
});

type RootReducer = typeof rootReducer;
export type State = ReturnType<RootReducer>;
