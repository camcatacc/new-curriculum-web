// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Definitions
export interface AvatarNameProps {
	name: string;
	surname: string;
}

// Element
const AvatarName = ({ name, surname }: AvatarNameProps) => {
	return (
		<Typography variant="h3" align="center">
			{name} <br />
			<Typography variant="inherit" className="leading-loose" style={{ fontSize: "smaller" }}>
				{surname}
			</Typography>
		</Typography>
	);
};

export default AvatarName;
