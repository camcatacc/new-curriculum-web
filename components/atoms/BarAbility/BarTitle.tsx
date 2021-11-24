// Modules
import React from "react";

// Styles
import * as Styled from "components/atoms/BarAbility/BarTitle.styled";

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
		<Styled.Container className="pl-2 pr-2 pt-1 pb-1" backgroundColor={backgroundColor}>
			<Styled.Typography fontcolor={fontColor} fontSize={fontSize} variant="body2" className="w-full truncate" align="center">
				{title}
			</Styled.Typography>
		</Styled.Container>
	);
};

export default BarTitle;
