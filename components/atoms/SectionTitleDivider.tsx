import { Divider } from "@material-ui/core";
import React from "react";
import { black } from "../../styles/customColors";
import { InlineStyles } from "../../styles/stylesInterface";

export const SectionTitleDivider = () => {
    return (
        <div
            style={{ borderColor: black }}
            className="self-center border-b-4 border-solid w-20 mt-4 mb-4"
        />
    );
};
