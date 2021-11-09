// Modules
const contentful = require("contentful");

// Client
const client = contentful.createClient({
	space: "or8z0a5f48r5",
	accessToken: "qmTxWV_YWoWpfG6KcTcDR_ccs7XDUURpRNogtOpFfQ4"
});

// Endpoints
export const getAbilitiesPage = async () => {
	const response = await client.getEntry("eL2Xenx3YBpXfG4sPmcZQ");
	console.log(response);
	console.log(response.fields.abilities.fields);
	return response;
};
