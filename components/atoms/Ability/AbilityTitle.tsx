// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
export interface AbilityTitleProps {
	children: any;
	style?: React.CSSProperties;
}

// Element
const AbilityTitle = ({ children, style }: AbilityTitleProps) => {
	return (
		<Typography variant="h3" align="center" style={style}>
			{children}
		</Typography>
	);
};

export default AbilityTitle;
