// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
export interface AbilityDescriptionProps {
	children: any;
}

// Element
const AbilityDescription = ({ children }: AbilityDescriptionProps) => {
	return (
		<Typography variant="body2" align="center" className="font-light">
			{children}
		</Typography>
	);
};

export default AbilityDescription;
