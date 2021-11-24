// Modules
import React, { useState } from "react";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Elements
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import ContactMeForm from "components/organisms/ContactMeForm/ContactMeForm";

// Auxiliary functions
import getOnScrollMotionFromOutsideOptions from "utils/getMotionFromOutsideOptions";

// Definitions
import type { Document } from "@contentful/rich-text-types";
import type { MotionProps } from "framer-motion";

export interface FindMeProps {
	text: Document;
	title: string;
}

// Motion
const buttonMotionOptions: MotionProps = {
	animate: {
		boxShadow: ["0 0 10px rgba(0, 0, 0, 1)", "0 0 10px rgba(0, 0, 0, 0)", "0 0 10px rgba(0, 0, 0, 1)"]
	},
	transition: {
		duration: 2,
		yoyo: Infinity,
		ease: "easeOut"
	}
};

const MotionButton = motion(
	// eslint-disable-next-line react/display-name
	React.forwardRef((props: { onClick: () => void }, ref) => (
		<Button {...props} ref={ref as any} color="secondary" variant="contained">
			CONTACT ME
		</Button>
	))
);

// Element
const FindMe = ({ text, title }: FindMeProps) => {
	const [openModal, setOpenModal] = useState(false);
	const formattedText = customDocumentToReactComponent(text, { boldColor: true, align: "center" });
	const motionOptions = getOnScrollMotionFromOutsideOptions(true, "fromBottom");
	const onContactMeClick = () => setOpenModal(true);
	const handleModalClose = () => setOpenModal(false);

	return (
		<div className="flex flex-col">
			<SectionTitle animated>{title}</SectionTitle>
			<ContactMeForm openModal={openModal} handleModalClose={handleModalClose} />
			<motion.div {...motionOptions}>{formattedText}</motion.div>
			<motion.div className="flex mt-8 justify-center">
				<div>
					<MotionButton {...buttonMotionOptions} onClick={onContactMeClick} />
				</div>
			</motion.div>
		</div>
	);
};

export default FindMe;
