// Constants
const GET_FORM_ENDPOINT = process.env.GET_FORM_ENDPOINT!;

// Redux
import { EmailForm } from "redux/types";

// Function
export async function sendEmail(form: EmailForm) {
	const requestOptions: RequestInit = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(form)
	};
	await fetch(GET_FORM_ENDPOINT, requestOptions).then((res) => {
		if (!res.ok) throw new Error(res.status.toString());
	});
}

export default sendEmail;
