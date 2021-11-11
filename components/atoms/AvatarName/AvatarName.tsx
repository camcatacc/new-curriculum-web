// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Styling
import { secondary } from "styles/customColors";

// Definitions
export interface AvatarNameProps {
	name: string;
	surname: string;
}

// Element
const AvatarName = ({ name, surname }: AvatarNameProps) => {
	return (
		<Typography variant="h3" align="center" style={{ color: secondary }}>
			{name} {surname}
		</Typography>
	);
};

export default AvatarName;
