// Modules
import React from "react";

// Elements
import { MenuElement } from "components/atoms/MenuElement/MenuElement";

// Definitions
export interface ListMenuElementsProps {
	menuElementsNames: string[];
}

// Element
const ListMenuElements = ({ menuElementsNames }: ListMenuElementsProps) => (
	<div className="flex-row flex gap-28">
		{menuElementsNames.map((val, ind) => (
			<MenuElement title={val} onClicked={() => {}} selected={false} key={`menuElement${ind}`} />
		))}
	</div>
);
export default ListMenuElements;
