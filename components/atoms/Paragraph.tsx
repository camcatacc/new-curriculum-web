import { Typography } from "@material-ui/core";
import React from "react";

export const Paragraph = (props: { children: any }) => {
    return (
        <Typography variant="body1" align="justify" style={{ lineHeight: 2.2 }}>
            {props.children}
        </Typography>
    );
};
