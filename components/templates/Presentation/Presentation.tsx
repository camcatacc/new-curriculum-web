// Modules
import React from "react";
import { useTheme } from "@material-ui/core";

// Elements
import { SectionTitle, About } from "@hardru/curriculum-web-components";

// Auxiliary Functions
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Definitions
import type { CmsPresentationPage } from "interfaces/cms/pages/Presentation";

export interface PresentationProps extends CmsPresentationPage {
	className?: string;
}

// Element
const Presentation = ({ className, title, aboutText, name, surname }: PresentationProps) => {
	const theme = useTheme();
	const paragraphs = customDocumentToReactComponent(aboutText, { boldColor: true, theme: theme });
	return (
		<div className={`flex flex-col justify-center ${className}`}>
			<SectionTitle animated>{title}</SectionTitle>
			<About name={name} surname={surname} paragraphs={paragraphs} animated image="/avatar.jpg" />
		</div>
	);
};

export default Presentation;
