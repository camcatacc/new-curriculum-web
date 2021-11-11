// Modules
import React from "react";

// Definitions
export interface PageSizeProps {
	children: React.ReactNode;
}

// Element
const PageSize = ({ children }: PageSizeProps) => <div className="w-full max-w-screen-xl pl-8 pr-8 md:pl-24 md:pr-24">{children}</div>;

export default PageSize;
