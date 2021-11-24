// Modules
import React from "react";

// Elements
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import About from "components/organisms/About/About";
import { CmsPresentationPage } from "interfaces/cms/pages/Presentation";

// Definitions
export interface PresentationProps extends CmsPresentationPage {
	className?: string;
}

// Element
const Presentation = ({ className, title, aboutText, name, surname }: PresentationProps) => {
	return (
		<div className={`flex flex-col justify-center ${className}`}>
			<SectionTitle animated>{title}</SectionTitle>
			<About name={name} surname={surname} paragraphsDoc={aboutText} animated />
		</div>
	);
};

export default Presentation;
