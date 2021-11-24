// Modules
import React from "react";
import { useTheme } from "@material-ui/core";

// Functions
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";
import { getMotionFlipVariants } from "utils/getMotionFlipOptions";

// Elements
import AbilityDescription from "components/atoms/Ability/AbilityDescription";
import AbilityIcon from "components/atoms/Ability/AbilityIcon";
import AbilityTitle from "components/atoms/Ability/AbilityTitle";
import { motion } from "framer-motion";

// Definitions
import type { Document } from "@contentful/rich-text-types";
export interface AbilityProps {
	title: string;
	description: Document;
	icon: string;
	animated?: boolean;
	delay?: number;
}

// Components
const Ability = ({ title, description, icon, animated = false, delay }: AbilityProps) => {
	const theme = useTheme();
	const formattedDescription = customDocumentToReactComponent(description, { boldColor: true, align: "center", variant: "body2", theme });
	const variants = getMotionFlipVariants(animated, delay);
	return (
		<motion.div variants={variants} className="w-full h-full flex-col flex items-center">
			<div className="md:w-1/5 w-2/5">
				<AbilityIcon icon={icon} />
			</div>
			<div className="mt-4 mb-2">
				<AbilityTitle>{title}</AbilityTitle>
			</div>
			<AbilityDescription>{formattedDescription}</AbilityDescription>
		</motion.div>
	);
};

export default Ability;
