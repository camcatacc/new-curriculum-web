// Modules
import styled from "styled-components";

// Elements
import { CircularProgress } from "@material-ui/core";

// Styling
import { green } from "@material-ui/core/colors";

// Components
export const Progress = styled(CircularProgress)`
	color: ${green[500]};
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -12px;
	margin-left: -12px;
`;
