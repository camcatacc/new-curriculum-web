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
		<div className="pl-2 pr-2 pt-1 pb-1" style={{ backgroundColor: backgroundColor }}>
			<Typography variant="body2" style={{ color: fontColor, fontSize: fontSize }} className="w-full truncate" align="center">
				{title}
			</Typography>
		</div>
	);
};

export default BarTitle;
