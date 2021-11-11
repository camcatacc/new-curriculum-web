// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
import type { PropTypes } from "@material-ui/core";
export interface ParagraphProps {
	children: React.ReactNode;
	align?: PropTypes.Alignment;
}

// Element
const Paragraph = ({ children, align }: ParagraphProps) => {
	return (
		<Typography variant="body1" align={align ?? "justify"} style={{ lineHeight: 2 }}>
			{children}
		</Typography>
	);
};

export default Paragraph;
