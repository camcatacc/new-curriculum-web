// Modules
import React from "react";

// Elements
import BarAbility from "components/molecules/BarAbility/BarAbility";
import { Typography } from "@material-ui/core";

// Definitions
import type { CmsBarAbility } from "interfaces/cms/molecules/BarAbility";

export interface GroupBarAbilitiesProps {
	title: string;
	abilities: CmsBarAbility[];
	titleColor: string;
	barColor: string;
	fontColor?: string;
}

// Element
const GroupBarAbilities = ({ abilities, title, titleColor, barColor, fontColor }: GroupBarAbilitiesProps) => (
	<div className="flex flex-col flex-1 gap-4">
		<Typography variant="h3" align="center">
			{title}
		</Typography>
		{abilities.map((ab, ind) => (
			<BarAbility {...ab} key={`ab${ind}`} barColor={ab.barColor ?? barColor} fontColor={ab.fontColor ?? fontColor} titleColor={ab.titleColor ?? titleColor} />
		))}
	</div>
);

export default GroupBarAbilities;
