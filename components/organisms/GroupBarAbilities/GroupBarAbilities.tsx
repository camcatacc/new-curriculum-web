// Modules
import React from "react";

// Elements
import BarAbility from "components/molecules/BarAbility/BarAbility";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

// Auxiliary functions
import getOnScrollMotionFromOutsideOptions from "utils/getMotionFromOutsideOptions";

// Definitions
import type { CmsBarAbility } from "interfaces/cms/molecules/BarAbility";

export interface GroupBarAbilitiesProps {
	title: string;
	abilities: CmsBarAbility[];
	titleColor: string;
	barColor: string;
	fontColor?: string;
	animated?: boolean;
	animatedDirection?: "fromLeft" | "fromRight" | "fromBottom";
}

// Element
const GroupBarAbilities = ({ abilities, title, titleColor, barColor, fontColor, animated = false, animatedDirection = "fromLeft" }: GroupBarAbilitiesProps) => {
	const motionOptions = getOnScrollMotionFromOutsideOptions(animated, animatedDirection);
	return (
		<motion.div {...motionOptions} className="flex-1">
			<div className="mb-5">
				<Typography variant="h3" align="center">
					{title}
				</Typography>
			</div>
			<div className="flex flex-col gap-3">
				{abilities.map((ab, ind) => (
					<BarAbility
						{...ab}
						key={`ab${ind}`}
						barColor={ab.barColor ?? barColor}
						fontColor={ab.fontColor ?? fontColor}
						titleColor={ab.titleColor ?? titleColor}
						animated={animated}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default GroupBarAbilities;
