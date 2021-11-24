import { CircularProgress } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import styled from "styled-components";

export const Progress = styled(CircularProgress)`
	color: ${green[500]};
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -12px;
	margin-left: -12px;
`;
