// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Styles
import { lightGrey } from "styles/customColors";

// Definitions
export interface BarProps {
	percentage: number;
	backgroundColor: string;
	fontSize?: number | string;
	fontColor?: string;
}

// Element
const Bar = ({ percentage, backgroundColor, fontSize = "1rem", fontColor = "white" }: BarProps) => {
	return (
		<div style={{ backgroundColor: lightGrey, height: "100%" }}>
			<div
				style={{
					width: `${percentage}%`,
					backgroundColor,
					height: "100%"
				}}
				className="pr-8 h-full flex flex-col justify-center"
			>
				<Typography variant="body1" align="right" style={{ fontSize: fontSize, color: fontColor }}>{`${percentage}%`}</Typography>
			</div>
		</div>
	);
};

export default Bar;
