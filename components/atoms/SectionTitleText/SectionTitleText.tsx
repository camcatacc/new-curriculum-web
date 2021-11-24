// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

// Auxiliary Functions
import { getMotionFromOutsideVariants } from "utils/getMotionFromOutsideOptions";

// Definitions
import type { MotionProps } from "framer-motion";

export interface SectionTitleTextProps {
	children: string;
	animated?: boolean;
}

// Auxiliary functions
const getMotionOptions = (animated?: boolean, delay?: number): MotionProps => {
	if (!animated) return {};
	const { initial, animation } = getMotionFromOutsideVariants("fromLeft", delay);
	return {
		variants: { initial, animation },
		initial: "initial",
		whileInView: "animation",
		viewport: {
			once: true,
			amount: 0.5
		}
	};
};

// Element
const SectionTitleText = ({ children, animated }: SectionTitleTextProps) => {
	const motionOptions = getMotionOptions(animated);
	return (
		<motion.div {...motionOptions}>
			<Typography variant="h2" align="center" className="uppercase">
				{children}
			</Typography>
		</motion.div>
	);
};

export default SectionTitleText;
