// Modules
import React from "react";

// Elements
import { MenuElement } from "components/atoms/MenuElement/MenuElement";

// Definitions
export interface ListMenuElementsProps {
	menuElements: { name: string; onClick: () => void }[];
}

// Element
const ListMenuElements = ({ menuElements }: ListMenuElementsProps) => (
	<div className="flex-row flex gap-28">
		{menuElements.length > 0 && menuElements.map((val, ind) => <MenuElement title={val.name} onClicked={val.onClick} selected={false} key={`menuElement${ind}`} />)}
	</div>
);

export default ListMenuElements;
