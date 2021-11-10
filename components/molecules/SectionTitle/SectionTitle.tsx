// Modules
import React from "react";

// Elements
import SectionTitleDivider from "components/atoms/SectionTitleDivider/SectionTitleDivider";
import SectionTitleText from "components/atoms/SectionTitleText/SectionTitleText";

// Definitions
export interface SectionTitleProps {
	children: string;
}

// Element
const SectionTitle = ({ children }: SectionTitleProps) => {
	return (
		<div className="flex flex-col mt-8 mb-8">
			<SectionTitleText>{children}</SectionTitleText>
			<SectionTitleDivider />
		</div>
	);
};

export default SectionTitle;
