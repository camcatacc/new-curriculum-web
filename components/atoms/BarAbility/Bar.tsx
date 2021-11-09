// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Styles
import { lightGrey } from "styles/customColors";

// Definitions
export interface BarProps {
	percentage: number;
	color: string;
	fontSize?: number | string;
}

// Element
const Bar = ({ percentage, color, fontSize }: BarProps) => {
	return (
		<div style={{ backgroundColor: lightGrey, height: "100%" }}>
			<div
				style={{
					width: `${percentage}%`,
					backgroundColor: color,
					height: "100%"
				}}
				className="pr-8 h-full flex flex-col justify-center"
			>
				<Typography variant="body1" color="textSecondary" align="right" style={{ fontSize: fontSize }}>{`${percentage}%`}</Typography>
			</div>
		</div>
	);
};

export default Bar;
