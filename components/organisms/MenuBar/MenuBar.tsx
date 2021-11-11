// Modules
import React, { useEffect, useRef } from "react";

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
	const ref = useRef<HTMLDivElement>(null);

	// Hides the bar menu when scrolled down and shows it when scrolled up
	useEffect(() => {
		var prevScrollPosition = window.scrollY;
		window.onscroll = () => {
			var currentScrollPos = window.scrollY;
			if (ref.current) ref.current.style.top = prevScrollPosition > currentScrollPos ? "0" : "-100px";
			prevScrollPosition = window.scrollY;
		};
	});

	return (
		<div ref={ref} style={{ backgroundColor: secondary, transition: "top 1s" }} className="w-full sticky top-0 flex justify-center pt-3 pb-3 z-50">
			<PageSize>
				<ListMenuElements menuElements={elements} selectedId={selectedId} />
			</PageSize>
		</div>
	);
};

export default MenuBar;
