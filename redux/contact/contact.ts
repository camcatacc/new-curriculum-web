import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { RootState, Contact } from "redux/types";

const initialState: Contact = {
	form: { name: "", surname: "", email: "", messageSubject: "", messageBody: "" }
};

export const sendEmail = createAsyncThunk<void, { error?: boolean } | undefined, { rejectValue: string }>("sendEmail", async (error, { getState, rejectWithValue }) => {
	if (error) {
		const delay = async () => new Promise((resolve) => setTimeout(resolve, 1000));
		await delay();
		return rejectWithValue("This request fails after one second");
	}
	const form = (getState() as RootState).contact.form;
	const requestOptions: RequestInit = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(form)
	};
	await fetch("https://api.getform.io/v1/forms/3bbec83c-4fda-4829-9cf7-75e8c61ae4cb?token=s7Ikwe8Bo8BGbaqHKVaExtS24pMdGXGX0VdgVBmFzZ1h0pxN5sZap5Sq2nCo", requestOptions).then(
		(res) => {
			if (!res.ok) rejectWithValue(res.status.toString());
		}
	);
});

export const contactSlice = createSlice({
	name: "Contact",
	initialState,
	reducers: {
		changeName: (state, action) => {
			state.form.name = action.payload;
		},
		changeSurname: (state, action) => {
			state.form.surname = action.payload;
		},
		changeEmail: (state, action) => {
			state.form.email = action.payload;
		},
		changeMessageSubject: (state, action) => {
			state.form.messageSubject = action.payload;
		},
		changeMessageBody: (state, action) => {
			state.form.messageBody = action.payload;
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
			console.log(sendEmail.rejected);
			state.status = "failed";
			state.error = action.payload;
		});
	}
});

export const { changeName, changeSurname, changeEmail, changeMessageSubject, changeMessageBody, emptyContact } = contactSlice.actions;

export const nameSelector = (state: RootState) => state.contact.form.name;
export const surnameSelector = (state: RootState) => state.contact.form.surname;
export const emailSelector = (state: RootState) => state.contact.form.email;
export const messageSubjectSelector = (state: RootState) => state.contact.form.messageSubject;
export const messageBodySelector = (state: RootState) => state.contact.form.messageBody;
export const wholeContactSelector = (state: RootState) => state.contact.form;

export const postStatusSelector = (state: RootState) => state.contact.status;
export const errorSelector = (state: RootState) => state.contact.error;

export default contactSlice.reducer;
