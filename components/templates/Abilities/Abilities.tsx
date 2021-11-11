// Modules
import React from "react";

// Elements
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import GroupAbilities from "components/organisms/GroupAbilities/GroupAbilities";
import GroupBarAbilities from "components/organisms/GroupBarAbilities/GroupBarAbilities";

// Definitions
import type { CmsGroupBarAbilitiesList, CmsAbilitiesList } from "interfaces/cms/pages/Abilities";

export interface AbilitiesProps {
	title: string;
	abilitiesLists: (CmsGroupBarAbilitiesList | CmsAbilitiesList)[];
}

// Element
const Abilities = ({ title, abilitiesLists }: AbilitiesProps) => (
	<div className="md:min-h-screen">
		<SectionTitle>{title}</SectionTitle>
		<div className="flex flex-1 flex-col gap-20">
			{abilitiesLists.map((abList) => {
				switch (abList.type) {
					case "AbilitiesList":
						return <GroupAbilities abilities={abList.abilities.map((ab) => ab.fields)} />;
					case "GroupBarAbilitiesList":
						return (
							<div className="flex flex-row gap-x-32 gap-y-10 flex-wrap justify-center">
								{abList.abilitiesGroups.map((abGroup) => (
									<GroupBarAbilities {...abGroup.fields} abilities={abGroup.fields.abilities.map((ab) => ab.fields)} />
								))}
							</div>
						);
				}
			})}
		</div>
	</div>
);

export default Abilities;
