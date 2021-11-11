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
	const paragraphs = customDocumentToReactComponent(paragraphsDoc, { marginBottom: 8, boldColor: true });
	return (
		<div style={{ gap: "10%" }} className="flex flex-col md:flex-row items-center">
			<div style={{ flex: 1 }} className="w-3/5 md:w-auto">
				<AvatarWithName name={name} surname={surname} />
			</div>
			<div style={{ flex: 2 }} className="mt-4 md:mt-0">
				{paragraphs}
			</div>
		</div>
	);
};

export default About;
