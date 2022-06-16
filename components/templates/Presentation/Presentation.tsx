// Modules
import React from "react";

// Elements
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import About from "components/organisms/About/About";

// Definitions
import type { CmsPresentationPage } from "interfaces/cms/pages/Presentation";

export interface PresentationProps extends Omit<CmsPresentationPage, "image"> {
	className?: string;
	image: string;
}

// Element
const Presentation = ({ className, title, aboutText, name, surname, image }: PresentationProps) => {
	return (
		<div className={`flex flex-col justify-center ${className}`}>
			<SectionTitle animated>{title}</SectionTitle>
			<About name={name} surname={surname} paragraphsDoc={aboutText} animated imageSrc={image} />
		</div>
	);
};

export default Presentation;
