// Modules
import React from "react";

// Elements
import BarAbility from "components/molecules/BarAbility";
import { Typography } from "@material-ui/core";

// Definitions
import type { BarAbilityProps, FormatBarAbilityProps, UnformattedBarAbilityProps } from "components/molecules/BarAbility";

export interface GroupBarAbilitiesProps {
	abilities: BarAbilityProps[];
	title?: string;
}

export interface GroupBarUnformattedAbilitiesProps extends FormatBarAbilityProps {
	abilities: UnformattedBarAbilityProps[];
	title?: string;
}

// Element
const GroupBarAbilities = ({ abilities, title }: GroupBarAbilitiesProps | GroupBarUnformattedAbilitiesProps) => {
	return (
		<div className="flex flex-col flex-1 gap-4">
			{title ? <Typography variant="h3">{title}</Typography> : null}
			{abilities.map((hab, ind) => (
				<div className="flex-1" key={`hab${ind}`}>
					<BarAbility {...hab} titleStyle={{ backgroundColor: "red", fontColor: "blue" }} title={"bu"} barStyle={{ backgroundColor: "yellow" }} />
				</div>
			))}
		</div>
	);
};

export default GroupBarAbilities;
