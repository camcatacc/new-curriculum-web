// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
export interface BarTitleProps {
	backgroundColor: string;
	fontColor: string;
	children: any;
	fontSize?: number | string;
}

// Element
const BarTitle = ({ backgroundColor, fontColor, children, fontSize }: BarTitleProps) => {
	return (
		<div className="pl-4 pr-4 pt-2 pb-2" style={{ backgroundColor: backgroundColor }}>
			<Typography variant="body1" style={{ color: fontColor, fontSize: fontSize }} className="w-full truncate" align="center">
				{children}
			</Typography>
		</div>
	);
};

export default BarTitle;
