// Modules
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAbilitiesPage } from "services/cms/contentful";

// Elements
import PageSize from "components/atoms/PageSize/PageSize";
import MenuBar from "components/organisms/MenuBar";
import Abilities from "components/templates/Abilities";
import Presentation from "components/templates/Presentation";

// Definitions
import type { NextPage } from "next";

// nextJS
export const getStaticProps = async ({ locale }: any) => {
	const abilities = await getAbilitiesPage();
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "footer"])),
			abilities
		}
	};
};

// Element
const Home: NextPage = ({ abilities }: any) => {
	return (
		<div className="flex flex-col w-full items-center">
			<MenuBar />
			<PageSize>
				<Presentation className="mb-20" />
				{/* 				<Abilities {...abilities} />
				 */}
			</PageSize>
		</div>
	);
};

export default Home;
