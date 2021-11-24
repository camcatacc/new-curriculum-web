// Modules
import styled from "styled-components";

// Definition
export interface CircularBackgroundContainerProps {
	backgroundColor: string;
	height?: string | number;
	width?: string | number;
	padding?: string | number;
}

// Components
export const Container = styled.div<CircularBackgroundContainerProps>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	padding: ${({ padding }) => padding};
`;
