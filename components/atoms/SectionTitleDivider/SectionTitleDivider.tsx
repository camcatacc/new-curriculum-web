// Modules
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "@material-ui/core";

// Utils
import { getMotionFromOutsideVariants } from "utils/getMotionFromOutsideOptions";

// Definitions
import type { MotionProps } from "framer-motion";
export interface SectionTitleDividerProps {
	animated?: boolean;
	delay?: number;
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
const SectionTitleDivider = ({ animated, delay }: SectionTitleDividerProps) => {
	const theme = useTheme();
	const motionOptions = getMotionOptions(animated, delay);
	return <motion.div {...motionOptions} className={`self-center border-b-2 ${theme.palette.type === "dark" ? "border-white" : "border-black"} border-solid w-20 mt-4 mb-4`} />;
};

export default SectionTitleDivider;
