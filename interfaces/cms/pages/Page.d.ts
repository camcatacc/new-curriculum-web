// Definitions
import type { ContentfulEntry } from "interfaces/cms/contentful";
import type { CmsPresentationPage } from "interfaces/cms/pages/Presentation";
import type { CmsMenuBar } from "interfaces/cms/menuBar/MenuBar";
import type { CmsAbilitiesPage } from "interfaces/cms/pages/Abilities";
import type { CmsFindMePage } from "interfaces/cms/pages/FindMe";

export type CmsPage = { id: string; name: string; stripe?: boolean } & (PresentationPage | OtherPage | AbilitiesPage | FindMePage);

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

type FindMePage = {
	type: "FindMePage";
	content: ContentfulEntry<CmsFindMePage>;
};
