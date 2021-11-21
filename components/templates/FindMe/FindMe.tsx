// Modules
import React from "react";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Elements
import SectionTitle from "components/molecules/SectionTitle/SectionTitle";
import { Button } from "@material-ui/core";

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
		<div className="flex flex-col justify-center">
			<SectionTitle>{title}</SectionTitle>
			{formattedText}
			<Button color="primary" variant="contained" href="mailTo:camachocateura1997@gmail.com" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "2rem" }}>
				CONTACT ME
			</Button>
		</div>
	);
};

export default FindMe;
