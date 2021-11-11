// Modules
import React from "react";

// Elements
import MenuElement from "components/atoms/MenuElement/MenuElement";

// Definitions
export interface ListMenuElementsProps {
	menuElements: { name: string; id: string; onClick: () => void }[];
	selectedId: string;
}

// Element
const ListMenuElements = ({ menuElements, selectedId }: ListMenuElementsProps) => (
	<div className="flex-row flex gap-28">
		{menuElements.length > 0 && menuElements.map((val, ind) => <MenuElement title={val.name} onClicked={val.onClick} selected={selectedId === val.id} key={`menuElement${ind}`} />)}
	</div>
);

export default ListMenuElements;
