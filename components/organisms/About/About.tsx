// Modules
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

// Elements
import Paragraph from "components/atoms/Paragraph/Paragraph";
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
	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (_: any, children: any) => (
				<div className="mb-8">
					<Paragraph>{children}</Paragraph>
				</div>
			)
		}
	};
	const paragraphs = documentToReactComponents(paragraphsDoc, options);
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
