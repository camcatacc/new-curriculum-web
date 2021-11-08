import { Typography } from "@material-ui/core";
import React from "react";
import {
    BarHability,
    BarHabilityProps,
    FormatBarHabilityProps,
    UnformattedBarHabilityProps,
} from "../molecules/BarHability";

export interface GroupBarHabilitiesProps {
    habilities: BarHabilityProps[];
    title?: string;
}

export interface GroupBarUnformattedHabilitiesProps
    extends FormatBarHabilityProps {
    habilities: UnformattedBarHabilityProps[];
    title?: string;
}

export const GroupBarHabilities = (
    props: GroupBarHabilitiesProps | GroupBarUnformattedHabilitiesProps
) => {
    let habilities: BarHabilityProps[];
    if ("titleStyle" in props.habilities[0]) {
        1;
    }
    return (
        <div className="flex flex-col flex-1 gap-4">
            {props.title ? (
                <Typography variant="h3">{props.title}</Typography>
            ) : null}
            {props.habilities.map((hab, ind) => (
                <div className="flex-1" key={`hab${ind}`}>
                    <BarHability {...hab} />
                </div>
            ))}
        </div>
    );
};
