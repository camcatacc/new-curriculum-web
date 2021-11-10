// Modules
import React from "react";

// Elements
import Ability from "components/molecules/Ability/Ability";

// Definitions
import type { AbilityProps } from "components/molecules/Ability/Ability";

export interface GroupAbilitiesProps {
	abilities: AbilityProps[];
}

// Element
const GroupAbilities = ({ abilities }: GroupAbilitiesProps) => {
	return (
		<div className="grid gap-12 grid-cols-3">
			{abilities.map((hab, ind) => (
				<Ability {...hab} key={`hab${ind}`} />
			))}
		</div>
	);
};

export default GroupAbilities;
