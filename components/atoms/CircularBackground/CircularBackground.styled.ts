import styled from "styled-components";

export const Container = styled.div<{ backgroundColor: string; height?: string | number; width?: string | number; padding?: string | number }>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	padding: ${({ padding }) => padding};
`;
