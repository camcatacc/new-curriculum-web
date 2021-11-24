// Modules
import React from "react";

// Elements
import Ability from "components/molecules/Ability/Ability";
import { motion } from "framer-motion";

// Definitions
import { CmsAbility } from "interfaces/cms/molecules/Ability";

export interface GroupAbilitiesProps {
	abilities: CmsAbility[];
	animated?: boolean;
}

// Options
const motionOptions = {
	initial: "offscreen",
	whileInView: "onscreen",
	viewport: { once: true, amount: 0.5 }
};

// Element
const GroupAbilities = ({ abilities, animated }: GroupAbilitiesProps) => {
	return (
		<motion.div {...(animated ? motionOptions : undefined)} className="grid md:gap-x-12 gap-y-10 grid-cols-2 md:grid-cols-3 gap-x-4">
			{abilities.map((ab, ind) => (
				<Ability description={ab.text} title={ab.title} icon={ab.icon} key={`ab${ind}`} animated={animated} delay={ind / 2} />
			))}
		</motion.div>
	);
};

export default GroupAbilities;
