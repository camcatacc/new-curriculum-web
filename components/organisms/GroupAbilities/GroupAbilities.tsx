// Modules
import React from "react";

// Elements
import Ability from "components/molecules/Ability/Ability";

// Definitions
import { CmsAbility } from "interfaces/cms/molecules/Ability";

export interface GroupAbilitiesProps {
	abilities: CmsAbility[];
}

// Element
const GroupAbilities = ({ abilities }: GroupAbilitiesProps) => {
	return (
		<div className="grid md:gap-x-12 gap-y-10 grid-cols-2 md:grid-cols-3 gap-x-4">
			{abilities.map((ab, ind) => (
				<Ability description={ab.text} title={ab.title} icon={ab.icon} key={`ab${ind}`} />
			))}
		</div>
	);
};

export default GroupAbilities;
