// Modules
import React from "react";

// Elements
import { Typography } from "@material-ui/core";

// Styles
import * as Styled from "components/atoms/MenuElement/MenuElement.styled";

// Definitions
export interface MenuElementProps {
	selected: boolean;
	onClicked: () => void;
	title: string;
	color?: string;
}

// Element
const MenuElement = ({ selected, onClicked, title, color }: MenuElementProps) => (
	<Typography variant="body2">
		<Styled.Link
			color="textSecondary"
			$selected={selected}
			$color={color}
			className={`cursor-pointer ${selected ? "font-semibold" : "font-regular"} uppercase`}
			onClick={onClicked}
		>
			{title}
		</Styled.Link>
	</Typography>
);

export default MenuElement;
