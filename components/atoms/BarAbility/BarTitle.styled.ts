// Modules
import styled from "styled-components";

// Elements
import { Typography as MaterialTypography } from "@material-ui/core";

// Components
export const Container = styled.div<{ backgroundColor?: string }>`
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Typography = styled(MaterialTypography)<{ fontcolor: string; fontSize: number | string }>`
	color: ${({ fontcolor }) => fontcolor};
	font-size: ${({ fontSize }) => fontSize};
`;
