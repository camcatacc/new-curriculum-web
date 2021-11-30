// Redux Modules
import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

// API
import sendEmailApi from "services/api/email";

// Definitions
import type { RootState, Contact } from "redux/types";

// Initial State
export const initialState: Contact = {
	form: { name: "", surname: "", email: "", messageSubject: "", messageBody: "" }
};

// Async Thunks
export const sendEmail = createAsyncThunk<void, { error?: boolean } | undefined, { rejectValue: string }>("sendEmail", async (error, { getState, rejectWithValue }) => {
	if (error) {
		const delay = async () => new Promise((resolve) => setTimeout(resolve, 1000));
		await delay();
		return rejectWithValue("This request fails after one second");
	}
	const form = (getState() as RootState).contact.form;
	return sendEmailApi(form).catch((err: Error) => rejectWithValue(err.message));
});

// Slice
export const contactSlice = createSlice({
	name: "Contact",
	initialState,
	reducers: {
		updateForm: (state, action) => {
			state.form = action.payload;
		},
		emptyContact: () => initialState
	},
	extraReducers(builder) {
		builder.addCase(sendEmail.pending, (state) => {
			state.status = "loading";
			state.error = "";
		});
		builder.addCase(sendEmail.fulfilled, (state) => {
			state.status = "succeeded";
			state.error = "";
		});
		builder.addCase(sendEmail.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.payload;
		});
	}
});

// Actions
export const { updateForm, emptyContact } = contactSlice.actions;

// Selectors
export const formSelector = (state: RootState) => state.contact.form;
export const postStatusSelector = (state: RootState) => state.contact.status;
export const errorSelector = (state: RootState) => state.contact.error;

// Default reducer export
export default contactSlice.reducer;
