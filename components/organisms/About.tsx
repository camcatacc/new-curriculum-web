// Modules
import React from "react";

// Elements
import Paragraph from "components/atoms/Paragraph/Paragraph";
import AvatarWithName from "components/molecules/AvatarWithName";

// Definitions
export interface AboutProps {
	name: string;
	surname: string;
	paragraphs: string[];
}

// Element
const About = ({ name, surname, paragraphs }: AboutProps) => {
	return (
		<div style={{ gap: "10%" }} className="flex flex-col md:flex-row items-center">
			<div style={{ flex: 1 }} className="w-full md:w-auto">
				<AvatarWithName name={name} surname={surname} />
			</div>
			<div style={{ flex: 2 }}>
				{paragraphs.map((p) => (
					<div className="mb-8">
						<Paragraph>{p}</Paragraph>
					</div>
				))}
			</div>
		</div>
	);
};

export default About;
