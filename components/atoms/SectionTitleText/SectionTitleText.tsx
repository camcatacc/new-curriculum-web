// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";
import { getMotionFromOutsideVariants } from "utils/getMotionFromOutsideOptions";
import { motion } from "framer-motion";

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
			amount: 1
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
