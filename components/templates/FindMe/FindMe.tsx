// Modules
import React from "react";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Elements
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import Paragraph from "components/atoms/Paragraph/Paragraph";

// Definitions
import type { Document } from "@contentful/rich-text-types";

export interface FindMeProps {
	text: Document;
	title: string;
}

// Element
const FindMe = ({ text, title }: FindMeProps) => {
	const formattedText = customDocumentToReactComponent(text, { boldColor: true, align: "center" });
	return (
		<div>
			<SectionTitle>{title}</SectionTitle>
			{formattedText}
		</div>
	);
};

export default FindMe;
