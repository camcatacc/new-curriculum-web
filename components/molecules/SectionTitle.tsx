import React from "react";
import { SectionTitleText } from "../atoms/SectionTitleText";
import { SectionTitleDivider } from "../atoms/SectionTitleDivider";
import { InlineStyles } from "../../styles/stylesInterface";

export const SectionTitle = (props: { children: string }) => {
    return (
        <div className="flex flex-col mt-8 mb-8">
            <SectionTitleText>{props.children}</SectionTitleText>
            <SectionTitleDivider />
        </div>
    );
};
