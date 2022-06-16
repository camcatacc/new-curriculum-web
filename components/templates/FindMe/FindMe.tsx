// Modules
import React, { useState } from "react";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Elements
import { Button, useTheme } from "@material-ui/core";
import { motion } from "framer-motion";
import { SectionTitle, ContactMeForm, ContactForm, ContactFormButtonType } from "@hardru/curriculum-web-components";

// Redux
import { useSelector } from "react-redux";
import { emptyContact, errorSelector, formSelector, postStatusSelector, sendEmail, updateForm } from "redux/contact/contact";
import { useAppDispatch } from "redux/store";

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

const motionOptions = getOnScrollMotionFromOutsideOptions(true, "fromBottom");

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
	const theme = useTheme();

	const form = useSelector(formSelector);
	const postStatus = useSelector(postStatusSelector);
	const error = useSelector(errorSelector);
	const dispatch = useAppDispatch();

	const loading = postStatus === "loading";

	function onFormChange(type: keyof ContactForm, newValue: string) {
		const copiedForm = { ...form };
		copiedForm[type] = newValue;
		dispatch(updateForm(copiedForm));
	}

	async function onButtonClick(type: ContactFormButtonType) {
		switch (type) {
			case "cancel":
				dispatch(emptyContact());
				handleModalClose();
				return;
			case "save":
				handleModalClose();
				return;
			case "send":
				await dispatch(sendEmail());
				handleModalClose();
				return;
			case "sendWithError":
				await dispatch(sendEmail({ error: true }));
				return;
		}
	}

	function onContactMeClick() {
		setOpenModal(true);
	}
	function handleModalClose() {
		setOpenModal(false);
	}

	const formattedText = customDocumentToReactComponent(text, { boldColor: true, align: "center", theme: theme });

	return (
		<div className="flex flex-col">
			<SectionTitle animated>{title}</SectionTitle>
			<ContactMeForm
				openModal={openModal}
				handleModalClose={handleModalClose}
				error={error}
				loading={loading}
				form={form}
				onButtonClick={onButtonClick}
				onFormChange={onFormChange}
			/>
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
