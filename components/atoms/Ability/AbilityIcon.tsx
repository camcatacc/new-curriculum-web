// Modules
import React from "react";

// Elements
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import CircularBackground from "components/HOC/withCircularBackground";

// Styles
import { primary, secondary } from "styles/customColors";

// Definitions
export interface AbilityIconProps {
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

// Element
const AbilityIcon = ({ icon }: AbilityIconProps) => {
	const CustomIcon = icon;
	return (
		<CircularBackground height="100%" width="100%" backgroundColor={secondary} padding="20%">
			<CustomIcon style={{ color: primary, height: "100%", width: "100%" }} />
		</CircularBackground>
	);
};

export default AbilityIcon;
