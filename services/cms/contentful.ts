// Modules
const contentful = require("contentful");

// Client
const client = contentful.createClient({
	space: "or8z0a5f48r5",
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

interface GetEntriesParams {
	id?: string;
}
// Endpoints
function getEntries<T>(ctUid: string, locale: string, extraParams: GetEntriesParams = {}): Promise<T[]> {
	let params: { [key: string]: string } = {};
	extraParams.id && (params["id"] = extraParams.id);
	return client
		.getEntries({ content_type: ctUid, locale, ...params })
		.then((res: any) => {
			console.log(res.items[0].fields);
			return res.items[0].fields;
		})
		.catch((err: any) => console.error(err));
}

export default getEntries;
