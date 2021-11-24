// Modules
import React from "react";

// Styles
import * as Styled from "components/atoms/CircularBackground/CircularBackground.styled";

// Definitions
export interface CircularBackgroundProps {
	children: React.ReactNode;
	backgroundColor: string;
	height?: string | number;
	width?: string | number;
	padding?: string | number;
}

// Element
const CircularBackground = ({ children, backgroundColor, height, width, padding }: CircularBackgroundProps) => {
	return (
		<Styled.Container className="rounded-full w-min h-min" backgroundColor={backgroundColor} height={height} width={width} padding={padding}>
			{children}
		</Styled.Container>
	);
};

export default CircularBackground;
