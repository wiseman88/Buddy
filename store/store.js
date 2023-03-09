import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebarSlice.js";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  sidebar,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

export const wrapper = createWrapper(makeStore);
