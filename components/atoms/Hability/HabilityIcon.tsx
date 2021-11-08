import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SchoolRounded } from "@material-ui/icons";
import React from "react";
import { primary, secondary } from "../../../styles/customColors";
import { CircularBackground } from "../../HOC/withCircularBackground";

export const HabilityIcon = (props: {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}) => {
    const CustomIcon = props.icon;
    return (
        <CircularBackground
            height="100%"
            width="100%"
            backgroundColor={secondary}
            padding="20%"
        >
            <CustomIcon
                style={{ color: primary, height: "100%", width: "100%" }}
            />
        </CircularBackground>
    );
};
