// Modules
import React, { useState } from "react";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Elements
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import { Button } from "@material-ui/core";

// Definitions
import type { Document } from "@contentful/rich-text-types";
import { motion, MotionProps } from "framer-motion";
import getOnScrollMotionFromOutsideOptions from "utils/getMotionFromOutsideOptions";
import ContactMeForm from "components/organisms/ContactMeForm/ContactMeForm";

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
	React.forwardRef((props, ref) => (
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
					<MotionButton {...buttonMotionOptions} onTap={onContactMeClick} />
				</div>
			</motion.div>
		</div>
	);
};

export default FindMe;
