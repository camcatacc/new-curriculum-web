// Modules
import React, { useEffect, useState } from "react";

// Elements
import MenuElement from "components/atoms/MenuElement/MenuElement";

// Definitions
export interface ListMenuElementsProps {
	menuElements: { name: string; id: string; onClick: () => void }[];
	selectedId: string;
	className?: string;
}

/* const MenuContainer = ({ className, children, isMobile }: { className?: string; children?: false | JSX.Element[]; isMobile?: boolean }) => {
	const [open, setOpen] = useState(false);

	return isMobile ? (
		<div>
			<IconButton onClick={() => setOpen(!open)} color="primary">
				<MoreVert />
			</IconButton>
			<Drawer open={open} onClose={() => setOpen(false)}>
				{children}
			</Drawer>
		</div>
	) : (
		<div className={`${className} flex-row flex gap-28`}>{children}</div>
	);
};*/

// Element
const ListMenuElements = ({ menuElements, selectedId, className }: ListMenuElementsProps) => {
	const [isMobile, setIsMobile] = useState(true);
	useEffect(() => {
		const media = window.matchMedia(`(max-width: 720px)`);
		setIsMobile(media.matches);
		const listener = (e: MediaQueryListEvent) => isMobile !== e.matches && setIsMobile(e.matches);
		media.addEventListener("change", listener);

		return () => {
			media.removeEventListener("change", listener);
		};
	}, []);

	if (isMobile) return <></>;

	return (
		//	<MenuContainer isMobile={isMobile} className={className}>
		<div className={`${className} flex-row flex gap-28`}>
			{menuElements.length > 0 &&
				menuElements.map((val, ind) => (
					<MenuElement /* color={isMobile ? "black" : undefined} */ title={val.name} onClicked={val.onClick} selected={selectedId === val.id} key={`menuElement${ind}`} />
				))}
		</div>
		// </MenuContainer>
	);
};

export default ListMenuElements;
