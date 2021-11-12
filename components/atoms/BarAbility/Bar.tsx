// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

// Definitions
import type { Variants } from "framer-motion";

export interface BarProps {
	percentage: number;
	backgroundColor: string;
	fontSize?: number | string;
	fontColor?: string;
	animated?: boolean;
}

// Auxiliary functions and options
const getMotionOptions = (animated: boolean, percentage: number) => {
	if (!animated) return {};
	const parentVariants: Variants = {
		offscreen: {
			width: 0
		},
		onscreen: {
			width: `${percentage}%`,
			transition: {
				type: "tween",
				duration: 0.5,
				when: "beforeChildren"
			}
		}
	};

	const childVariants: Variants = {
		offscreen: {
			opacity: 0
		},
		onscreen: {
			opacity: 1,
			transition: {
				type: "tween",
				duration: 0.3
			}
		}
	};
	return { parentVariants, childVariants };
};

// Element
const Bar = ({ percentage, backgroundColor, fontSize = "1rem", fontColor = "white", animated = false }: BarProps) => {
	const { parentVariants, childVariants } = getMotionOptions(animated, percentage);
	return (
		<div className="bg-gray-300 h-full">
			<motion.div
				variants={parentVariants}
				style={{
					width: `${percentage}%`,
					backgroundColor,
					height: "100%"
				}}
				className="pr-4 h-full flex flex-col justify-center"
			>
				<motion.div variants={childVariants}>
					<Typography variant="body1" align="right" style={{ fontSize: fontSize, color: fontColor }}>{`${percentage}%`}</Typography>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Bar;
