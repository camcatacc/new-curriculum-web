// Modules
import React from "react";
import { useTheme } from "@material-ui/core";

// Styling
import * as Styled from "components/atoms/AvatarName/AvatarName.styled";

// Definitions
export interface AvatarNameProps {
	name: string;
	surname: string;
}

// Element
const AvatarName = ({ name, surname }: AvatarNameProps) => {
	const theme = useTheme();
	return (
		<Styled.Typography variant="h3" align="center" $color={theme.palette.secondary[theme.palette.type]}>
			{name} {surname}
		</Styled.Typography>
	);
};

export default AvatarName;
