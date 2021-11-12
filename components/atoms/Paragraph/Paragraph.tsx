// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
import type { PropTypes } from "@material-ui/core";
import type { TypographyVariant } from "@material-ui/core";

export interface ParagraphProps {
	children: React.ReactNode;
	align?: PropTypes.Alignment;
	variant?: TypographyVariant;
}

// Element
const Paragraph = ({ children, align = "justify", variant = "body1" }: ParagraphProps) => {
	return (
		<Typography variant={variant} align={align} style={{ lineHeight: 2 }}>
			{children}
		</Typography>
	);
};

export default Paragraph;
