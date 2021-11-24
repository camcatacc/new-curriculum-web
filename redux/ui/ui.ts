import { createSlice } from "@reduxjs/toolkit";
import { RootState, UI } from "redux/types";

const initialState: UI = {
	nightMode: false
};

export const uiSlice = createSlice({
	name: "UI",
	initialState,
	reducers: {
		switchNightMode: (state, action) => {
			state.nightMode = action.payload;
		}
	}
});

export const { switchNightMode } = uiSlice.actions;

export const isNightModeSelector = (state: RootState) => state.ui.nightMode;

export default uiSlice.reducer;
