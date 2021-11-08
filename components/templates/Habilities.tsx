import {
    BusinessCenterRounded,
    DoneAllRounded,
    EmojiPeople,
    GroupRounded,
    SchoolRounded,
    SearchRounded,
} from "@material-ui/icons";
import React from "react";
import { useTranslation } from "next-i18next";
import { HabilityProps } from "../molecules/Hability";
import { SectionTitle } from "../molecules/SectionTitle";
import { GroupHabilities } from "../organisms/GroupHabilities";
import {
    GroupBarHabilities,
    GroupBarUnformattedHabilitiesProps,
} from "../organisms/GroupBarHabilities";
import {
    BarHabilityProps,
    FormatBarHabilityProps,
    UnformattedBarHabilityProps,
} from "../molecules/BarHability";
import { brightPink, darkPink, white } from "../../styles/customColors";

export const Habilities = () => {
    const { t } = useTranslation();

    const habilitiesArray: HabilityProps[] = [
        {
            title: t("Passion for learning"),
            description: t(
                "I love learning and I do it with ease. Any challenge is welcome!"
            ),
            icon: SchoolRounded,
        },
        {
            title: t("Comunicative"),
            description: t(
                "Be it in catalan, spanish or english, I have good communication skills."
            ),
            icon: EmojiPeople,
        },
        {
            title: t("Agile team player"),
            description: t(
                "I know and apply Agile methodologies and consider teamworking of utmost importance."
            ),
            icon: GroupRounded,
        },
        {
            title: t("Perfectionist"),
            description: t(
                "From responsive designs to error absence, nothing is irrelevant."
            ),
            icon: DoneAllRounded,
        },
        {
            title: t("Analytic and resolutive"),
            description: t(
                "To solve problems, I  analyze them and then make decisions."
            ),
            icon: SearchRounded,
        },
        {
            title: t("Connected with business"),
            description: t(
                "I have managed a firm for years and I know its needs."
            ),
            icon: BusinessCenterRounded,
        },
    ];

    const barHabilitiesArray: UnformattedBarHabilityProps[] = [
        {
            title: "HTML",
            percentage: 80,
        },
        {
            title: "CSS",
            percentage: 80,
        },
        {
            title: "Javascript",
            percentage: 90,
        },
        {
            title: "Typescript",
            percentage: 90,
        },
        {
            title: "React",
            percentage: 90,
        },
        {
            title: "Angular",
            percentage: 50,
        },
    ];

    const barHabilitiesFormat: FormatBarHabilityProps = {
        barStyle: {
            backgroundColor: darkPink,
        },
        titleStyle: {
            backgroundColor: brightPink,
            fontColor: white,
        },
        fontSize: "1.1rem",
    };

    return (
        <div className="md:min-h-screen">
            <SectionTitle>{t("HABILITIES")}</SectionTitle>
            <GroupHabilities habilities={habilitiesArray} />
            <div className="flex flex-row gap-32">
                <GroupBarHabilities
                    habilities={barHabilitiesArray}
                    {...barHabilitiesFormat}
                />
                <GroupBarHabilities
                    habilities={barHabilitiesArray}
                    {...barHabilitiesFormat}
                />
            </div>
        </div>
    );
};
