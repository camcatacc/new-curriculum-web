// Modules
import React from "react";

// Elements
import Abilities from "components/templates/Abilities/Abilities";
import Presentation from "components/templates/Presentation/Presentation";

// Definitions
import type { ContentfulEntry } from "interfaces/cms/contentful";
import type { Page } from "interfaces/cms/pages/Page";
import type { CmsPresentationPage } from "interfaces/cms/pages/Presentation";
import type { CmsAbilitiesPage } from "interfaces/cms/pages/Abilities";

const convertCmsPageToComponent = (page: ContentfulEntry<Page>) => {
	switch (page.fields.type) {
		case "PresentationPage":
			return presentationCmsToComponent(page.fields.content.fields);
		case "AbilitiesPage":
			return abilitiesCmsToComponent(page.fields.content.fields);
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

export default convertCmsPageToComponent;
