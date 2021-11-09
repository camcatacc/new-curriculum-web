// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
export interface SectionTitleTextProps {
	children: string;
}

// Element
const SectionTitleText = ({ children }: SectionTitleTextProps) => {
	return (
		<Typography variant="h2" align="center">
			{children}
		</Typography>
	);
};

export default SectionTitleText;
