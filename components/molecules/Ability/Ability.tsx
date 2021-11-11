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
	const formattedDescription = customDocumentToReactComponent(description, { boldColor: true });
	return (
		<div className="w-full h-full flex-col flex items-center">
			<div className="w-1/4">
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
