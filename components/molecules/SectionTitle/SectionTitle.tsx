// Modules
import React from "react";

// Elements
import SectionTitleDivider from "components/atoms/SectionTitleDivider/SectionTitleDivider";
import SectionTitleText from "components/atoms/SectionTitleText/SectionTitleText";

// Definitions
export interface SectionTitleProps {
	children: string;
	animated?: boolean;
}

// Components
const SectionTitle = ({ children, animated }: SectionTitleProps) => {
	return (
		<div className="flex flex-col mt-8 mb-8">
			<SectionTitleText animated={animated}>{children}</SectionTitleText>
			<SectionTitleDivider animated={animated} />
		</div>
	);
};

export default SectionTitle;
