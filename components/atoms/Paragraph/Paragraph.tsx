// Modules
import React from "react";

// Styles
import * as Styled from "components/atoms/Paragraph/Paragraph.styled";

// Definitions
import type { PropTypes, TypographyVariant } from "@material-ui/core";

export interface ParagraphProps {
	children: React.ReactNode;
	align?: PropTypes.Alignment;
	variant?: TypographyVariant;
}

// Component
const Paragraph = ({ children, align = "justify", variant = "body1" }: ParagraphProps) => {
	return (
		<Styled.Typography variant={variant} align={align}>
			{children}
		</Styled.Typography>
	);
};

export default Paragraph;
