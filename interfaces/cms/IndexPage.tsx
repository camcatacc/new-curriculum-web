import { ContentfulEntry } from "interfaces/cms/contentful";
import { Page } from "interfaces/cms/pages/Page";

export const CONTENT_TYPE_INDEX_PAGE = "index";

export interface IndexPage {
	pages: ContentfulEntry<Page>[];
}
