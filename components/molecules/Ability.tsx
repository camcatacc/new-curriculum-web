// Modules
import React from "react";

// Elements
import AbilityDescription from "components/atoms/Ability/AbilityDescription";
import AbilityIcon from "components/atoms/Ability/AbilityIcon";
import AbilityTitle from "components/atoms/Ability/AbilityTitle";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";

// Definitions
export interface AbilityProps {
	title: string;
	description: string;
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

// Element
const Ability = ({ title, description, icon }: AbilityProps) => {
	return (
		<div className="w-full h-full flex-col flex items-center">
			<div className="w-1/4">
				<AbilityIcon icon={icon} />
			</div>
			<div className="mt-4 mb-2">
				<AbilityTitle>{title}</AbilityTitle>
			</div>
			<AbilityDescription>{description}</AbilityDescription>
		</div>
	);
};

export default Ability;
