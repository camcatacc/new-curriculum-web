// Modules
import React from "react";

// Elements
import Ability from "components/molecules/Ability/Ability";

// Definitions
import type { AbilityProps } from "components/molecules/Ability/Ability";
import { CmsAbility } from "interfaces/cms/molecules/Ability";

export interface GroupAbilitiesProps {
	abilities: CmsAbility[];
}

// Element
const GroupAbilities = ({ abilities }: GroupAbilitiesProps) => {
	return (
		<div className="grid gap-12 grid-cols-3">
			{abilities.map((ab, ind) => (
				<Ability description={ab.text} title={ab.title} icon={ab.icon} key={`ab${ind}`} />
			))}
		</div>
	);
};

export default GroupAbilities;
