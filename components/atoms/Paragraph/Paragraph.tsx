// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
export interface ParagraphProps {
	children: React.ReactNode;
}

// Element
const Paragraph = ({ children }: ParagraphProps) => {
	return (
		<Typography variant="body1" align="justify" style={{ lineHeight: 2 }}>
			{children}
		</Typography>
	);
};

export default Paragraph;
