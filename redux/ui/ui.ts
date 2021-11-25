// Redux modules
import { createSlice } from "@reduxjs/toolkit";
import { RootState, UI } from "redux/types";

// Initial State
export const initialState: UI = {
	nightMode: false
};

// Slice
export const uiSlice = createSlice({
	name: "UI",
	initialState,
	reducers: {
		switchNightMode: (state, action) => {
			state.nightMode = action.payload;
		}
	}
});

// Actions
export const { switchNightMode } = uiSlice.actions;

// Selectors
export const isNightModeSelector = (state: RootState) => state.ui.nightMode;

// Default reducer export
export default uiSlice.reducer;
