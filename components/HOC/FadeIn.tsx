// Modules
import React from "react";

// Elements
import { CSSTransition } from "react-transition-group";

// Definitions
export interface FadeInProps {
	inside: boolean;
}

// Element
const FadeIn = ({ inside }: FadeInProps) => {
	return (
		<CSSTransition in={inside} timeout={200} classNames="">
			<p>Hi</p>
		</CSSTransition>
	);
};

export default FadeIn;
