import { ContentfulEntry } from "interfaces/cms/contentful";
import { CmsPresentationPage } from "interfaces/cms/pages/Presentation";
import { CmsMenuBar } from "interfaces/cms/menuBar/MenuBar";

export type Page = { id: string; name: string } & (PresentationPage | OtherPage);
type PresentationPage = {
	type: "PresentationPage";
	content: ContentfulEntry<CmsPresentationPage>;
};

type OtherPage = {
	type: "OtherPage";
	content: ContentfulEntry<CmsMenuBar>;
};
