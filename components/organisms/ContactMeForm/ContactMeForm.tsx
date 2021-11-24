// Modules
import React from "react";

// Elements
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, Typography } from "@material-ui/core";

// Redux
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import {
	changeEmail,
	changeMessageBody,
	changeMessageSubject,
	changeName,
	changeSurname,
	emailSelector,
	emptyContact,
	errorSelector,
	messageBodySelector,
	messageSubjectSelector,
	nameSelector,
	postStatusSelector,
	sendEmail,
	surnameSelector
} from "redux/contact/contact";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

// Styles
import ButtonWithState from "components/atoms/ButtonWithState/ButtonWithState";

// Definitions
export interface ContactMeFormProps {
	openModal: boolean;
	handleModalClose: () => void;
}

// Components
const ContactMeForm = ({ openModal, handleModalClose }: ContactMeFormProps) => {
	const formName = useSelector(nameSelector);
	const formSurname = useSelector(surnameSelector);
	const formEmail = useSelector(emailSelector);
	const formMessageSubject = useSelector(messageSubjectSelector);
	const formMessageBody = useSelector(messageBodySelector);

	const postStatus = useSelector(postStatusSelector);
	const error = useSelector(errorSelector);

	const dispatch = useAppDispatch();

	const handleInputChange = (value: string, action: ActionCreatorWithPayload<any, string>) => {
		dispatch(action(value));
	};

	const handleButtonClick = async (type: "cancel" | "send" | "save" | "sendWithError") => {
		switch (type) {
			case "cancel":
				handleModalClose();
				dispatch(emptyContact());
				return;
			case "send":
				const response = await dispatch(sendEmail());
				if (response.meta.requestStatus === "fulfilled") {
					console.log(response.meta.requestStatus);
					handleModalClose();
					dispatch(emptyContact());
				}
				return;
			case "save":
				handleModalClose();
				return;
			case "sendWithError":
				await dispatch(sendEmail({ error: true }));
		}
	};
	return (
		<Dialog open={openModal} onClose={handleModalClose} fullWidth>
			<DialogTitle>
				<Typography variant="h2" align="center">
					CONTACT ME
				</Typography>
			</DialogTitle>
			<DialogContent>
				<DialogContentText variant="body1" align="center">
					I will be glad to help ;)
				</DialogContentText>
				<div className="flex flex-col gap-3 mt-6">
					<TextField onChange={(ev) => handleInputChange(ev.target.value, changeName)} value={formName} variant="outlined" label="Name" />
					<TextField onChange={(ev) => handleInputChange(ev.target.value, changeSurname)} value={formSurname} variant="outlined" label="Surname" />
					<TextField onChange={(ev) => handleInputChange(ev.target.value, changeEmail)} value={formEmail} variant="outlined" label="Email" />
					<TextField onChange={(ev) => handleInputChange(ev.target.value, changeMessageSubject)} value={formMessageSubject} variant="outlined" label="Message Subject" />
					<TextField onChange={(ev) => handleInputChange(ev.target.value, changeMessageBody)} value={formMessageBody} variant="outlined" rows={5} multiline label="Message Body" />
				</div>
			</DialogContent>
			<DialogActions>
				<div className="flex items-center justify-center flex-col md:flex-row w-full md:w-auto">
					<ButtonWithState variant="text" loading={postStatus === "loading"} disabled={postStatus === "loading"} onClick={() => handleButtonClick("sendWithError")}>
						Send with error
					</ButtonWithState>
					<Button color="secondary" onClick={() => handleButtonClick("cancel")}>
						Cancel
					</Button>
					<Button variant="outlined" color="secondary" onClick={() => handleButtonClick("save")}>
						Finish it later
					</Button>
					<ButtonWithState variant="contained" loading={postStatus === "loading"} disabled={postStatus === "loading"} onClick={() => handleButtonClick("send")}>
						Send
					</ButtonWithState>
				</div>
			</DialogActions>
			{error && (
				<Typography variant="body2" style={{ marginRight: "1rem", marginBottom: "1rem" }} align="right" color="error">
					{error}
				</Typography>
			)}
		</Dialog>
	);
};

export default ContactMeForm;
