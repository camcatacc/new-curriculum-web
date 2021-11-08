import { Typography } from "@material-ui/core";
import React from "react";
import { InlineStyles } from "../../styles/stylesInterface";

export const AvatarName = (props: { name: string; surname: string }) => {
    return (
        <Typography variant="h3" align="center">
            {props.name} <br />
            <Typography
                variant="inherit"
                className="leading-loose"
                style={{ fontSize: "smaller" }}
            >
                {props.surname}
            </Typography>
        </Typography>
    );
};
