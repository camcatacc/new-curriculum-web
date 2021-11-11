// Modules
import React from "react";

// Elements
import { Link, Typography } from "@material-ui/core";

// Styles
import { primary, white } from "styles/customColors";
import styles from "./MenuElement.module.css";

// Definitions
export interface MenuElementProps {
	selected: boolean;
	onClicked: () => void;
	title: string;
}

// Element
const MenuElement = ({ selected, onClicked, title }: MenuElementProps) => (
	<Typography>
		<Link
			color="textSecondary"
			style={{
				color: selected ? primary : white
			}}
			className={`cursor-pointer ${styles.linkButton} ${selected ? "font-semibold" : "font-regular"} uppercase`}
			onClick={onClicked}
		>
			{title}
		</Link>
	</Typography>
);

export default MenuElement;
