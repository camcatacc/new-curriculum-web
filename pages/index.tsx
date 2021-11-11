// Modules
import React, { useRef } from "react";
import getEntries from "services/cms/contentful";

// Constants
import { CONTENT_TYPE_INDEX_PAGE } from "interfaces/cms/IndexPage";

// Elements
import PageSize from "components/atoms/PageSize/PageSize";
import MenuBar from "components/organisms/MenuBar/MenuBar";

// Hooks and functions
import useOnScreen from "utils/hooks/useOnScreen";
import convertCmsPageToComponent from "utils/convertCmsPageToComponent";

// Definitions
import type { IndexPage } from "interfaces/cms/IndexPage";
import Layout from "components/container/Layout";

export interface HomePageProps {
	content: IndexPage;
}

// nextJS
export const getStaticProps = async ({ locale, _ }: any): Promise<{ props: HomePageProps }> => {
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
			onClick: () => window.scrollTo({ top: (commonRef.current[i]?.getBoundingClientRect().top ?? 0) + window.scrollY - 20, behavior: "smooth" }),
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
		<Layout>
			<div className="flex flex-col w-full items-center">
				<MenuBar elements={formattedMenuElements} selectedId={getSelectedId()} />
				{content.pages.map((page, i) => (
					<section key={`page${i}`} className={`mb-12 w-full flex justify-center ${page.fields.stripe ? "bg-gray-100" : ""}`} ref={(ref) => (commonRef.current[i] = ref)}>
						<PageSize>{convertCmsPageToComponent(page)}</PageSize>
					</section>
				))}
			</div>
		</Layout>
	);
};

export default Home;
