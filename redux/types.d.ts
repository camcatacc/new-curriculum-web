export interface RootState {
	contact: Contact;
}

export interface Contact {
	form: EmailForm;
	status?: "loading" | "succeeded" | "failed";
	error?: string;
}

export interface EmailForm {
	name: string;
	surname: string;
	email: string;
	messageSubject: string;
	messageBody: string;
}
