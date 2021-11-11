// Constants
export const CONTENT_TYPE_PRESENTATION_PAGE = "aboutPage";

// Definitions
import type { Document } from "@contentful/rich-text-types";

export interface CmsPresentationPage {
	title: string;
	aboutText: Document;
	name: string;
	surname: string;
}
