// Modules
import React from "react";

// Elements
import Abilities from "components/templates/Abilities/Abilities";
import Presentation from "components/templates/Presentation/Presentation";
import FindMe from "components/templates/FindMe/FindMe";

// Definitions
import type { ContentfulEntry } from "interfaces/cms/contentful";
import type { CmsPage } from "interfaces/cms/pages/Page";
import type { CmsPresentationPage } from "interfaces/cms/pages/Presentation";
import type { CmsAbilitiesPage } from "interfaces/cms/pages/Abilities";
import type { CmsFindMePage } from "interfaces/cms/pages/FindMe";

// Functions
const convertCmsPageToComponent = (page: ContentfulEntry<CmsPage>) => {
	switch (page.fields.type) {
		case "PresentationPage":
			return presentationCmsToComponent(page.fields.content.fields);
		case "AbilitiesPage":
			return abilitiesCmsToComponent(page.fields.content.fields);
		case "FindMePage":
			return findMeCmsToComponent(page.fields.content.fields);
	}
};

const presentationCmsToComponent = (page: CmsPresentationPage) => <Presentation {...page} />;
const abilitiesCmsToComponent = (page: CmsAbilitiesPage) => {
	const lists = page.abilitiesLists.map((abList) => {
		return {
			...abList.fields
		};
	});

	return <Abilities title={page.title} abilitiesLists={lists} />;
};

const findMeCmsToComponent = (page: CmsFindMePage) => <FindMe {...page} />;

export default convertCmsPageToComponent;
