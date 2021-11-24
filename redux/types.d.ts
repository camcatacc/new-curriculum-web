export interface RootState {
	ui: UI;
	contact: Contact;
}

export interface UI {
	nightMode: boolean;
}

export interface Contact {
	form: { name: string; surname: string; email: string; messageSubject: string; messageBody: string };
	status?: "loading" | "succeeded" | "failed";
	error?: string;
}
