// Modules
import React from "react";

// Elements
import { SectionTitle, GroupAbilities, GroupBarAbilities, AbilityProps, BarAbilityProps } from "@hardru/curriculum-web-components";
import { CmsGroupBarAbilities } from "interfaces/cms/organisms/GroupBarAbilities/GroupBarAbilities";

// Auxiliary functions
import calculateDirectionFromNumberColumns from "utils/calculateDirectionFromNumberColumns";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Definitions
import type { CmsGroupBarAbilitiesList, CmsAbilitiesList } from "interfaces/cms/pages/Abilities";
import { useTheme } from "@material-ui/core";

export interface AbilitiesProps {
	title: string;
	abilitiesLists: (CmsGroupBarAbilitiesList | CmsAbilitiesList)[];
}

// Element
const Abilities = ({ title, abilitiesLists }: AbilitiesProps) => {
	const theme = useTheme();

	const formattedGroupAbilities = (list: CmsAbilitiesList): AbilityProps[] =>
		list.abilities
			.map((ab) => ab.fields)
			.map((ab) => ({ icon: ab.icon, title: ab.title, description: customDocumentToReactComponent(ab.text, { variant: "body2", align: "center", theme }) }));

	const formattedGroupBarAbilities = (group: CmsGroupBarAbilities): BarAbilityProps[] =>
		group.abilities.map(({ fields: ab }) => ({
			barColor: ab.barColor ?? group.barColor,
			name: ab.name,
			percentage: ab.percentage,
			titleColor: ab.titleColor ?? group.titleColor,
			fontColor: ab.fontColor ?? group.fontColor
		}));

	return (
		<div className="md:min-h-screen">
			<SectionTitle animated>{title}</SectionTitle>
			<div className="flex flex-1 flex-col md:gap-20 gap-14">
				{abilitiesLists.map((abList, ind) => {
					switch (abList.type) {
						case "AbilitiesList":
							return <GroupAbilities key={`abList${ind}`} abilities={formattedGroupAbilities(abList)} animated />;
						case "GroupBarAbilitiesList":
							return (
								<div key={`abList${ind}`} className="flex flex-row gap-x-32 gap-y-10 flex-wrap justify-center">
									{abList.abilitiesGroups.map((abGroup, ind2) => (
										<GroupBarAbilities
											key={`abGroup${ind2}`}
											{...abGroup.fields}
											abilities={formattedGroupBarAbilities(abGroup.fields)}
											animated
											animatedDirection={calculateDirectionFromNumberColumns(ind2 + 1, abList.abilitiesGroups.length, 2)}
										/>
									))}
								</div>
							);
					}
				})}
			</div>
		</div>
	);
};
export default Abilities;
