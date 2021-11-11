// Modules
import React from "react";
import customDocumentToReactComponent from "utils/customDocumentToReactComponent";

// Elements
import AbilityDescription from "components/atoms/Ability/AbilityDescription";
import AbilityIcon from "components/atoms/Ability/AbilityIcon";
import AbilityTitle from "components/atoms/Ability/AbilityTitle";

// Definitions
import type { Document } from "@contentful/rich-text-types";
export interface AbilityProps {
	title: string;
	description: Document;
	icon: string;
}

// Element
const Ability = ({ title, description, icon }: AbilityProps) => {
	const formattedDescription = customDocumentToReactComponent(description, { boldColor: true, align: "center" });
	return (
		<div className="w-full h-full flex-col flex items-center">
			<div className="md:w-1/5 w-2/5">
				<AbilityIcon icon={icon} />
			</div>
			<div className="mt-4 mb-2">
				<AbilityTitle>{title}</AbilityTitle>
			</div>
			<AbilityDescription>{formattedDescription}</AbilityDescription>
		</div>
	);
};

export default Ability;
