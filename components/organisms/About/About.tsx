// Modules
import React from "react";
import { useTheme } from "@material-ui/core";

// Utils
import getMotionFlipOptions from "utils/getMotionFlipOptions";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";
import { getMotionFromOutsideVariants } from "utils/getMotionFromOutsideOptions";

// Elements
import AvatarWithName from "components/molecules/AvatarWithName/AvatarWithName";
import { motion } from "framer-motion";

// Styles
import * as Styled from "components/organisms/About/About.styled";

// Definitions
import type { Document } from "@contentful/rich-text-types";

// Functions
export interface AboutProps {
	name: string;
	surname: string;
	paragraphsDoc: Document;
	animated?: boolean;
}

const getTextMotionOptions = (animated?: boolean) => {
	if (!animated) return {};
	const { initial, animation } = getMotionFromOutsideVariants("fromRight");
	return {
		variants: { initial, animation },
		initial: "initial",
		whileInView: "animation",
		viewport: {
			once: true,
			margin: "-200px"
		}
	};
};

// Element
const About = ({ name, surname, paragraphsDoc, animated = false }: AboutProps) => {
	const theme = useTheme();
	const paragraphs = customDocumentToReactComponent(paragraphsDoc, { boldColor: true, theme });
	const textMotionOptions = getTextMotionOptions(animated);
	const imageMotionOptions = getMotionFlipOptions(animated, {});

	return (
		<Styled.ParentContainer className="flex flex-col md:flex-row items-center">
			<Styled.FirstChildContainer {...imageMotionOptions} className="w-3/5 md:w-auto">
				<AvatarWithName name={name} surname={surname} />
			</Styled.FirstChildContainer>
			<Styled.SecondChildContainer {...textMotionOptions} className="mt-4 md:mt-0 flex gap-8 flex-col justify-center">
				{paragraphs}
			</Styled.SecondChildContainer>
		</Styled.ParentContainer>
	);
};

export default About;
