// Modules
import React from "react";

// Elements
import CircularBackground from "components/HOC/withCircularBackground";
import { SvgIcon } from "@material-ui/core";

// Styles
import { primary, secondary } from "styles/customColors";

// Definitions
export interface AbilityIconProps {
	icon: string;
}

// Element
const AbilityIcon = ({ icon }: AbilityIconProps) => (
	<CircularBackground height="100%" width="100%" backgroundColor={secondary} padding="20%">
		<SvgIcon style={{ color: primary, height: "100%", width: "100%" }}>
			<path fill="currentColor" d={icon} />
		</SvgIcon>
	</CircularBackground>
);

export default AbilityIcon;
