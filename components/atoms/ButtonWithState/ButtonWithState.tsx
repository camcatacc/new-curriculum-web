import { Box, Button, CircularProgress } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";

export interface ButtonWithStateProps {
	loading?: boolean;
	onClick?: () => void;
	disabled?: boolean;
	children: any;
	variant?: "text" | "outlined" | "contained";
}
const ButtonWithState = ({ loading, onClick, disabled, variant, children }: ButtonWithStateProps) => (
	<Box sx={{ m: 1, position: "relative" }}>
		<Button disabled={disabled} color="secondary" variant={variant} onClick={onClick}>
			{children}
		</Button>
		{loading && (
			<CircularProgress
				size={24}
				style={{
					color: green[500],
					position: "absolute",
					top: "50%",
					left: "50%",
					marginTop: "-12px",
					marginLeft: "-12px"
				}}
			/>
		)}
	</Box>
);

export default ButtonWithState;
