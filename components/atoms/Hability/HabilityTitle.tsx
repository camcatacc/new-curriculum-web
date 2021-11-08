import { Typography } from "@material-ui/core";
import React from "react";

export const HabilityTitle = (props: {
    children: any;
    style?: React.CSSProperties;
}) => {
    return (
        <Typography variant="h3" align="center" style={props.style}>
            {props.children}
        </Typography>
    );
};
