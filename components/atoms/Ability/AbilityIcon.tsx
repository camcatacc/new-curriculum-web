// Modules
import React from "react";
import { useTheme } from "@material-ui/core";

// Elements
import CircularBackground from "components/atoms/CircularBackground/CircularBackground";

// Styles
import * as Styled from "components/atoms/Ability/AbilityIcon.styled";

// Definitions
export interface AbilityIconProps {
	icon: string;
}

// Element
const AbilityIcon = ({ icon }: AbilityIconProps) => {
	const theme = useTheme();
	return (
		<CircularBackground height="100%" width="100%" backgroundColor={theme.palette.secondary[theme.palette.type]} padding="20%">
			<Styled.SvgIcon>
				<path color={theme.palette.primary[theme.palette.type]} d={icon} />
			</Styled.SvgIcon>
		</CircularBackground>
	);
};

export default AbilityIcon;
