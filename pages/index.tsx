// Modules
import React, { useRef } from "react";
import getEntries from "services/cms/contentful";

// Constants
import { CONTENT_TYPE_INDEX_PAGE } from "interfaces/cms/IndexPage";

// Redux
import { isNightModeSelector, switchNightMode } from "redux/ui/ui";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";

// Elements
import Layout from "components/containers/Layout";
import { MenuBar, PageSize } from "@hardru/curriculum-web-components";

// Styles
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { getMaterialTheme } from "styles/materialUi";

// Hooks and functions
import useMultipleOnScreen from "utils/hooks/useOnScreen/useMultipleOnScreen";
import convertCmsPageToComponent from "utils/convertCmsPageToComponent";

// Definitions
import type { IndexPage } from "interfaces/cms/IndexPage";

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
	const nightMode = useSelector(isNightModeSelector);
	const dispatch = useAppDispatch();
	const commonRef = useRef<(HTMLElement | null)[]>([]);
	const visibleRefs = useMultipleOnScreen(commonRef, { rootMargin: "-300px" });

	const palletType = nightMode ? "dark" : "light";

	const theme = getMaterialTheme(palletType);
	const formattedMenuElements = content.pages.map((page, i) => {
		/* istanbul ignore next */
		const top = commonRef.current[i]?.getBoundingClientRect().top ?? 0;
		return {
			name: page.fields.name,
			onClick: () =>
				window.scrollTo({
					top: top + window.scrollY - 20,
					behavior: "smooth"
				}),
			id: page.fields.id
		};
	});

	const stripeColor = palletType === "light" ? "bg-gray-100" : "bg-gray-900";

	const getSelectedId = () => {
		let id = "";
		visibleRefs.some((bool, i) => {
			/* istanbul ignore next */
			id = bool ? content.pages[i].fields.id : id;
			return bool;
		});
		return id;
	};

	const onSwitchChange = (change: boolean) => dispatch(switchNightMode(change));

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout name={"Curriculum Web"}>
				<div className="flex flex-col w-full items-center">
					<MenuBar elements={formattedMenuElements} selectedId={getSelectedId()} darkModeChecked={nightMode} onSwitchChange={onSwitchChange} />
					{content.pages.map((page, i) => (
						<section key={`page${i}`} className={`w-full flex justify-center ${page.fields.stripe ? stripeColor : ""}`} ref={(ref) => (commonRef.current[i] = ref)}>
							<PageSize className="mb-12">{convertCmsPageToComponent(page)}</PageSize>
						</section>
					))}
				</div>
			</Layout>
		</ThemeProvider>
	);
};

export default Home;
