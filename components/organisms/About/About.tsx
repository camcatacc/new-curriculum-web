// Modules
import React from "react";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Elements
import AvatarWithName from "components/molecules/AvatarWithName/AvatarWithName";

// Definitions
import type { Document } from "@contentful/rich-text-types";

export interface AboutProps {
	name: string;
	surname: string;
	paragraphsDoc: Document;
}

// Element
const About = ({ name, surname, paragraphsDoc }: AboutProps) => {
	const paragraphs = customDocumentToReactComponent(paragraphsDoc, { splitParagraph: true, boldColor: true });
	return (
		<div style={{ gap: "10%" }} className="flex flex-col md:flex-row items-center">
			<div style={{ flex: 1 }} className="w-full md:w-auto">
				<AvatarWithName name={name} surname={surname} />
			</div>
			<div style={{ flex: 2 }}>
				<div className="mb-8">{paragraphs}</div>
			</div>
		</div>
	);
};

export default About;
