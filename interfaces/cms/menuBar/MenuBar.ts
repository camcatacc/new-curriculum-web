// Constants
export const CONTENT_TYPE_MENU_BAR = "menu";

// Definitions
import type { ContentfulEntry } from "interfaces/cms/contentful";

export interface CmsMenuBar {
	elements: ContentfulEntry<{ name: string; path: string }>[];
}
