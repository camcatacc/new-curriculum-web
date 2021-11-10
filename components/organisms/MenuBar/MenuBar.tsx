// Modules
import React from "react";

// Elements
import PageSize from "components/atoms/PageSize/PageSize";
import ListMenuElements from "components/molecules/ListMenuElements/ListMenuElements";

// Styles
import { secondary } from "styles/customColors";

// Definitions
export interface MenuBarProps {
	elements: { name: string; id: string; onClick: () => void }[];
	selectedId: string;
}
// Element
const MenuBar = ({ elements, selectedId }: MenuBarProps) => {
	return (
		<div style={{ backgroundColor: secondary }} className="w-full sticky top-0 flex justify-center pt-3 pb-3 z-50">
			<PageSize>
				<ListMenuElements menuElements={elements} selectedId={selectedId} />
			</PageSize>
		</div>
	);
};

export default MenuBar;
