// Modules
import React from "react";

// Definitions
export interface CircularBackgroundProps {
	children: React.ReactNode;
	backgroundColor: string;
	height?: string | number;
	width?: string | number;
	padding?: string | number;
}

// Element
const CircularBackground = ({ children, backgroundColor, height, width, padding }: CircularBackgroundProps) => {
	return (
		<div
			className="rounded-full w-min h-min"
			style={{
				backgroundColor: backgroundColor,
				height: height,
				width: width,
				padding: padding
			}}
		>
			{children}
		</div>
	);
};

export default CircularBackground;
