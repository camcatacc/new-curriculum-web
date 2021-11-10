// Modules
import React from "react";

// Elements
import PageSize from "components/atoms/PageSize/PageSize";
import ListMenuElements from "components/molecules/ListMenuElements/ListMenuElements";

// Styles
import { secondary } from "styles/customColors";

// Definitions
export interface MenuBarProps {
	elements: { name: string; path: string }[];
}
// Element
const MenuBar = ({ elements }: MenuBarProps) => {
	return (
		<div style={{ backgroundColor: secondary }} className="w-full sticky top-0 flex justify-center pt-3 pb-3 z-50">
			<PageSize>
				<ListMenuElements menuElementsNames={elements.map((el) => el.name)} />
			</PageSize>
		</div>
	);
};

export default MenuBar;
