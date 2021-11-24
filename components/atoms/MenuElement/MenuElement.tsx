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
	color?: string;
}

// Element
const MenuElement = ({ selected, onClicked, title, color }: MenuElementProps) => (
	<Typography variant="body2">
		<Link
			color="textSecondary"
			style={{
				color: selected ? primary : color ?? white
			}}
			className={`cursor-pointer ${styles.linkButton} ${selected ? "font-semibold" : "font-regular"} uppercase`}
			onClick={onClicked}
		>
			{title}
		</Link>
	</Typography>
);

export default MenuElement;
