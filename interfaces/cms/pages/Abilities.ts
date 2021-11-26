// Constants
export const CONTENT_TYPE_PRESENTATION_PAGE = "abilitiesPage";

// Definitions
import type { ContentfulEntry } from "interfaces/cms/contentful";
import type { CmsAbility } from "interfaces/cms/molecules/Ability";
import type { CmsGroupBarAbilities } from "interfaces/cms/organisms/GroupBarAbilities/GroupBarAbilities";

export interface CmsAbilitiesPage {
	title: string;
	abilitiesLists: ContentfulEntry<CmsAbilitiesList | CmsGroupBarAbilitiesList>[];
}

export interface CmsAbilitiesList {
	title: string;
	type: "AbilitiesList";
	abilities: ContentfulEntry<CmsAbility>[];
}

export interface CmsGroupBarAbilitiesList {
	title: string;
	type: "GroupBarAbilitiesList";
	abilitiesGroups: ContentfulEntry<CmsGroupBarAbilities>[];
}
