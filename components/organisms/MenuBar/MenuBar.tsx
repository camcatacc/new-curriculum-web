// Modules
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { isNightModeSelector, switchNightMode } from "redux/ui/ui";
import { useAppDispatch } from "redux/store";

// Elements
import ListMenuElements from "components/molecules/ListMenuElements/ListMenuElements";

// Styles
import { secondary } from "styles/customColors";
import * as Styled from "components/organisms/MenuBar/MenuBar.styled";

// Definitions
export interface MenuBarProps {
	elements: { name: string; id: string; onClick: () => void }[];
	selectedId: string;
}

// Element
const MenuBar = ({ elements, selectedId }: MenuBarProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const nightMode = useSelector(isNightModeSelector);
	const dispatch = useAppDispatch();

	const onSwitchChange = (ev: React.ChangeEvent<HTMLInputElement>) => dispatch(switchNightMode(ev.target.checked));

	return (
		<div ref={ref} style={{ backgroundColor: secondary, transition: "top 1s" }} className="w-full sticky top-0 flex justify-center pt-2 pb-2 z-50">
			<ListMenuElements menuElements={elements} selectedId={selectedId} className="w-4/5 max-w-screen-lg items-center" />
			<Styled.MaterialUISwitch checked={nightMode} onChange={onSwitchChange} value="nightMode" />
		</div>
	);
};

export default MenuBar;

// Hides the bar menu when scrolled down and shows it when scrolled up

/* 	useEffect(() => {
		var prevScrollPosition = window.scrollY;
		window.onscroll = () => {
			var currentScrollPos = window.scrollY;
			if (ref.current) ref.current.style.top = prevScrollPosition > currentScrollPos ? "0" : "-100px";
			prevScrollPosition = window.scrollY;
		};
	});
 */
