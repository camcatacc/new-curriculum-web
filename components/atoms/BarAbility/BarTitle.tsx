// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
export interface BarTitleProps {
	backgroundColor: string;
	fontColor?: string;
	title: any;
	fontSize?: number | string;
}

// Element
const BarTitle = ({ backgroundColor, title, fontSize = "1rem", fontColor = "white" }: BarTitleProps) => {
	return (
		<div className="pl-4 pr-4 pt-2 pb-2" style={{ backgroundColor: backgroundColor }}>
			<Typography variant="body1" style={{ color: fontColor, fontSize: fontSize }} className="w-full truncate" align="center">
				{title}
			</Typography>
		</div>
	);
};

export default BarTitle;
