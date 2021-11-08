import { Typography } from "@material-ui/core";
import React from "react";

export const SectionTitleText = (props: { children: string }) => {
    return (
        <Typography variant="h2" align="center">
            {props.children}
        </Typography>
    );
};
