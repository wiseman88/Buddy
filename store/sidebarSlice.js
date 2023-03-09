import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.display = !state.display;
    },
  },
});

export const { toggleVisibility } = sidebarSlice.actions;

export default sidebarSlice.reducer;
