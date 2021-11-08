import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import React from "react";
import { HabilityDescription } from "../atoms/Hability/HabilityDescription";
import { HabilityIcon } from "../atoms/Hability/HabilityIcon";
import { HabilityTitle } from "../atoms/Hability/HabilityTitle";

export interface HabilityProps {
    title: string;
    description: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const Hability = (props: HabilityProps) => {
    return (
        <div className="w-full h-full flex-col flex items-center">
            <div className="w-1/4">
                <HabilityIcon icon={props.icon} />
            </div>
            <div className="mt-4 mb-2">
                <HabilityTitle>{props.title}</HabilityTitle>
            </div>
            <HabilityDescription>{props.description}</HabilityDescription>
        </div>
    );
};
