// Modules
import React from "react";

// Definitions
export interface AbilityDescriptionProps {
	children: React.ReactNode;
}

// Element
const AbilityDescription = ({ children }: AbilityDescriptionProps): JSX.Element => {
	return <>{children}</>;
};

export default AbilityDescription;
