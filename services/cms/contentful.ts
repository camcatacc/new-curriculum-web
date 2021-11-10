// Modules
const contentful = require("contentful");

// Definitions
import { ContentfulResponse } from "interfaces/cms/contentful";

interface GetEntriesParams {
	id?: string;
}

// Client
const client = contentful.createClient({
	space: "or8z0a5f48r5",
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

// Functions
function getEntries<T>(ctUid: string, locale: string, extraParams: GetEntriesParams = {}): Promise<T> {
	let params: { [key: string]: string } = {};
	extraParams.id && (params["id"] = extraParams.id);
	return client
		.getEntries({ content_type: ctUid, locale, ...params })
		.then((res: ContentfulResponse<T>) => res.items[0].fields)
		.catch((err: any) => console.error(err));
}

export default getEntries;
