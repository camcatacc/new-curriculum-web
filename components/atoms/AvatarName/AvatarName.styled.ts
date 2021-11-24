// Modules
import styled from "styled-components";

// Elements
import { Typography as MaterialTypography } from "@material-ui/core";

// Components
export const Typography = styled(MaterialTypography)<{ $color: string }>`
	color: ${({ $color }) => $color};
`;
