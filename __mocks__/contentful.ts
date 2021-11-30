// Definitions
import type { ContentfulResponse } from "interfaces/cms/contentful";

export function createClient(params: { space: string; accessToken: string }) {
	async function getEntries(props: { [key: string]: any }): Promise<ContentfulResponse<any>> {
		if (props.content_type === "error") {
			throw new Error("Error");
		}
		return data;
	}
	return {
		getEntries
	};
}

const data = {
	sys: {},
	total: 1,
	skip: 0,
	limit: 9,
	items: [{ metadata: {}, sys: {}, fields: [{ id: "field1" }, { id: "field2" }] }],
	includes: {}
};
