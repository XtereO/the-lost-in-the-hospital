import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./main";

const rootReducer = combineReducers({
  main: mainReducer,
});

type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
