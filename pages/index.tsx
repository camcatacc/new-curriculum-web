// Modules
import React, { useRef } from "react";
import getEntries from "services/cms/contentful";

// Constants
import { CONTENT_TYPE_INDEX_PAGE } from "interfaces/cms/IndexPage";

// Elements
import PageSize from "components/atoms/PageSize/PageSize";
import MenuBar from "components/organisms/MenuBar/MenuBar";
import Abilities from "components/templates/Abilities/Abilities";
import Presentation from "components/templates/Presentation/Presentation";

// Definitions
import type { IndexPage } from "interfaces/cms/IndexPage";
import type { ContentfulEntry } from "interfaces/cms/contentful";
import type { Page } from "interfaces/cms/pages/Page";
import useOnScreen from "utils/hooks/useOnScreen";

export interface HomePageProps {
	content: IndexPage;
}

// nextJS
export const getStaticProps = async ({ locale, locales }: any): Promise<{ props: HomePageProps }> => {
	const indexPage = await getEntries<IndexPage>(CONTENT_TYPE_INDEX_PAGE, locale);

	return {
		props: {
			content: { ...indexPage }
		}
	};
};

// Element
const Home = ({ content }: HomePageProps) => {
	const commonRef = useRef<(HTMLElement | null)[]>([]);
	const visibleRefs = useOnScreen(commonRef);

	const formattedMenuElements = content.pages.map((page, i) => {
		return {
			name: page.fields.name,
			onClick: () => window.scrollTo({ top: (commonRef.current[i]?.getBoundingClientRect().top ?? 0) + window.scrollY - 55, behavior: "smooth" }),
			id: page.fields.id
		};
	});

	const getSelectedId = () => {
		let id = "";
		visibleRefs.some((bool, i) => {
			id = bool ? content.pages[i].fields.id : id;
			return bool;
		});
		return id;
	};

	return (
		<div className="flex flex-col w-full items-center">
			<MenuBar elements={formattedMenuElements} selectedId={getSelectedId()} />
			<PageSize>
				{content.pages.map((page, i) => (
					<section key={`page${i}`} style={{ marginBottom: 150 }} ref={(ref) => (commonRef.current[i] = ref)}>
						{getPageComponent(page)}
					</section>
				))}
			</PageSize>
		</div>
	);
};

const getPageComponent = (page: ContentfulEntry<Page>) => {
	switch (page.fields.type) {
		case "PresentationPage":
			return <Presentation {...page.fields.content.fields} />;
	}
};

export default Home;
