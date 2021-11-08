import { Typography } from "@material-ui/core";
import React from "react";

export const BarTitle = (props: {
    backgroundColor: string;
    fontColor: string;
    children: any;
    fontSize?: number | string;
}) => {
    const { backgroundColor, fontColor, fontSize, children } = props;
    return (
        <div
            className="pl-4 pr-4 pt-2 pb-2"
            style={{ backgroundColor: backgroundColor }}
        >
            <Typography
                variant="body1"
                style={{ color: fontColor, fontSize: fontSize }}
                className="w-full truncate"
                align="center"
            >
                {children}
            </Typography>
        </div>
    );
};
