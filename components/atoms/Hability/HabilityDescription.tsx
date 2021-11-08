import { Typography } from "@material-ui/core";
import React from "react";

export const HabilityDescription = (props: { children: any }) => {
    return (
        <Typography variant="body2" align="center" className="font-light">
            {props.children}
        </Typography>
    );
};
