// Modules
import React from "react";

// Definitions
export interface PageSizeProps {
	children: React.ReactNode;
	className?: string;
}

// Element
const PageSize = ({ children, className }: PageSizeProps) => <div className={`${className} w-full max-w-screen-xl pl-4 pr-4 md:pl-24 md:pr-24`}>{children}</div>;

export default PageSize;
