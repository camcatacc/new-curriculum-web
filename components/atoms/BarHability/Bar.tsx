import { Typography } from "@material-ui/core";
import React from "react";
import { lightGrey } from "../../../styles/customColors";

export const Bar = (props: {
    percentage: number;
    color: string;
    fontSize?: number | string;
}) => {
    return (
        <div style={{ backgroundColor: lightGrey, height: "100%" }}>
            <div
                style={{
                    width: `${props.percentage}%`,
                    backgroundColor: props.color,
                    height: "100%",
                }}
                className="pr-8 h-full flex flex-col justify-center"
            >
                <Typography
                    variant="body1"
                    color="textSecondary"
                    align="right"
                    style={{ fontSize: props.fontSize }}
                >{`${props.percentage}%`}</Typography>
            </div>
        </div>
    );
};
