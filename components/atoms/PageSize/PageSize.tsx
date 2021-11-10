// Modules
import React from "react";

// Definitions
export interface PageSizeProps {
	children: React.ReactNode;
}

// Element
const PageSize = ({ children }: PageSizeProps) => {
	return <div className="w-full max-w-screen-xl pl-8 pr-8 md:pl-16 md:pr-16">{children}</div>;
};

export default PageSize;
