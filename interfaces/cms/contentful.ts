export interface AbilitiesPage {
	fields: {
		title: string;
		abilities: {
			fields: any;
		}[];
	};
}

export interface ContentfulEntry<T> {
	metadata: any;
	sys: any;
	fields: T;
}

export interface ContentfulResponse<T> {
	sys: any;
	total: number;
	skip: number;
	limit: number;
	items: ContentfulEntry<T>[];
	includes: any;
}
