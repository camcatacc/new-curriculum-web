// Modules
import React from "react";
import getEntries from "services/cms/contentful";

// CONST
import { CONTENT_TYPE_PRESENTATION_PAGE } from "interfaces/cms/pages/Presentation";
import { CONTENT_TYPE_MENU_BAR } from "interfaces/cms/menuBar/MenuBar";

// Elements
import PageSize from "components/atoms/PageSize/PageSize";
import MenuBar from "components/organisms/MenuBar/MenuBar";
import Abilities from "components/templates/Abilities/Abilities";
import Presentation from "components/templates/Presentation/Presentation";

// Definitions
import type { CmsPresentationPage } from "interfaces/cms/pages/Presentation";
import type { CmsMenuBar } from "interfaces/cms/menuBar/MenuBar";

export interface HomePageProps {
	aboutPage: CmsPresentationPage;
	menu: CmsMenuBar;
}

// nextJS
export const getStaticProps = async ({ locale, locales }: any): Promise<{ props: HomePageProps }> => {
	const aboutPage = await getEntries<CmsPresentationPage>(CONTENT_TYPE_PRESENTATION_PAGE, locale);
	const menu = await getEntries<CmsMenuBar>(CONTENT_TYPE_MENU_BAR, locale);
	return {
		props: {
			aboutPage,
			menu
		}
	};
};

// Element
const Home = ({ aboutPage, menu }: HomePageProps) => {
	const formattedMenuElements = menu.elements.map((el) => {
		return { name: el.fields.name, onClick: () => {} };
	});
	return (
		<div className="flex flex-col w-full items-center">
			<MenuBar elements={formattedMenuElements} />
			<PageSize>
				<Presentation className="mb-20" {...aboutPage} />
				{/* 				<Abilities {...abilities} />
				 */}
			</PageSize>
		</div>
	);
};

export default Home;
