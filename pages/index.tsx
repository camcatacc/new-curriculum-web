import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { MenuElement } from "../components/atoms/MenuElement";
import { PageSize } from "../components/atoms/PageSize";
import { MenuBar } from "../components/organisms/MenuBar";
import { Habilities } from "../components/templates/Habilities";
import { Presentation } from "../components/templates/Presentation";

const Home: NextPage = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <MenuBar />
            <PageSize>
                <Presentation className="mb-20" />
                <Habilities />
            </PageSize>
        </div>
    );
};

export default Home;

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
});
