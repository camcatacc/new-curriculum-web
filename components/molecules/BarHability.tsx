import React from "react";
import { brightPink, white } from "../../styles/customColors";
import { Bar } from "../atoms/BarHability/Bar";
import { BarTitle } from "../atoms/BarHability/BarTitle";

export interface BarHabilityProps
    extends UnformattedBarHabilityProps,
        FormatBarHabilityProps {}

export interface UnformattedBarHabilityProps {
    percentage: number;
    title: string;
}

export interface FormatBarHabilityProps {
    titleStyle: {
        backgroundColor: string;
        fontColor: string;
    };
    barStyle: {
        backgroundColor: string;
    };
    fontSize?: string | number;
}

export const BarHability = (props: BarHabilityProps) => {
    return (
        <div className="flex flex-row w-full">
            <div className="w-1/4">
                <BarTitle
                    backgroundColor={props.titleStyle.backgroundColor}
                    fontColor={props.titleStyle.fontColor}
                    fontSize={props.fontSize}
                >
                    {props.title}
                </BarTitle>
            </div>
            <div className="flex-1">
                <Bar
                    color={props.barStyle.backgroundColor}
                    percentage={props.percentage}
                    fontSize={props.fontSize}
                />
            </div>
        </div>
    );
};
