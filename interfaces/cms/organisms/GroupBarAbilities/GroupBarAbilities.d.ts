import type { ContentfulEntry } from "interfaces/cms/contentful";
import type { CmsBarAbility } from "interfaces/cms/molecules/BarAbility";

export interface CmsGroupBarAbilities {
	title: string;
	abilities: ContentfulEntry<CmsBarAbility>[];
	titleColor: string;
	barColor: string;
	fontColor?: string;
}
