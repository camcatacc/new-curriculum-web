// Definitions
import type { ContentfulEntry } from "interfaces/cms/contentful";
import type { CmsPresentationPage } from "interfaces/cms/pages/Presentation";
import type { CmsMenuBar } from "interfaces/cms/menuBar/MenuBar";
import type { CmsAbilitiesPage } from "interfaces/cms/pages/Abilities";

export type Page = { id: string; name: string } & (PresentationPage | OtherPage | AbilitiesPage);

type PresentationPage = {
	type: "PresentationPage";
	content: ContentfulEntry<CmsPresentationPage>;
};

type OtherPage = {
	type: "OtherPage";
	content: ContentfulEntry<CmsMenuBar>;
};

type AbilitiesPage = {
	type: "AbilitiesPage";
	content: ContentfulEntry<CmsAbilitiesPage>;
};
