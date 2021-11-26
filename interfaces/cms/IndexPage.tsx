// CONSTANTS
export const CONTENT_TYPE_INDEX_PAGE = "index";

// Definitions
import type { ContentfulEntry } from "interfaces/cms/contentful";
import type { CmsPage } from "interfaces/cms/pages/Page";

export interface IndexPage {
	pages: ContentfulEntry<CmsPage>[];
}
