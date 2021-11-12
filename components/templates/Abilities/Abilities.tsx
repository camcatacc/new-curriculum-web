// Modules
import React from "react";

// Elements
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import GroupAbilities from "components/organisms/GroupAbilities/GroupAbilities";
import GroupBarAbilities from "components/organisms/GroupBarAbilities/GroupBarAbilities";

// Auxiliary functions
import calculateDirectionFromNumberColumns from "utils/calculateDirectionFromNumberColumns";

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
		<div className="flex flex-1 flex-col md:gap-20 gap-14">
			{abilitiesLists.map((abList, ind) => {
				switch (abList.type) {
					case "AbilitiesList":
						return <GroupAbilities key={`abList${ind}`} abilities={abList.abilities.map((ab) => ab.fields)} />;
					case "GroupBarAbilitiesList":
						return (
							<div key={`abList${ind}`} className="flex flex-row gap-x-32 gap-y-10 flex-wrap justify-center">
								{abList.abilitiesGroups.map((abGroup, ind2) => (
									<GroupBarAbilities
										key={`abGroup${ind2}`}
										{...abGroup.fields}
										abilities={abGroup.fields.abilities.map((ab) => ab.fields)}
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

export default Abilities;
