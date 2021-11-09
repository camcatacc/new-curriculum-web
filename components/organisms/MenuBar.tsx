// Modules
import React from "react";

// Elements
import PageSize from "components/atoms/PageSize/PageSize";
import ListMenuElements from "components/molecules/ListMenuElements";

// Styles
import { secondary } from "styles/customColors";

// Element
const MenuBar = () => {
	return (
		<div style={{ backgroundColor: secondary }} className="w-full sticky top-0 flex justify-center pt-3 pb-3 z-50">
			<PageSize>
				<ListMenuElements menuElementsNames={["INICI", "QUI SÓC"]} />
			</PageSize>
		</div>
	);
};

export default MenuBar;
