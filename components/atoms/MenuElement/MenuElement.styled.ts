// Modules
import styled from "styled-components";

// Elements
import { Link as MaterialLink } from "@material-ui/core";

// Styles
import { primary } from "styles/customColors";

export const Link = styled(MaterialLink)<{ $selected: boolean; $color?: string }>`
	color: ${({ $selected, $color }) => ($selected ? primary : $color ?? "white")};
	:hover {
		color: #3ceb93 !important;
		font-weight: 600 !important;
		transition: color 0.2s ease-in;
	}
`;
