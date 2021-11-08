import { Link, Typography } from "@material-ui/core";
import React from "react";
import { primary, white } from "../../styles/customColors";
import styles from "./MenuElement.module.css";

export const MenuElement = (props: {
    selected: boolean;
    onPressed: () => void;
    name: string;
}) => {
    const { name, selected, onPressed } = props;
    return (
        <Typography>
            <Link
                href=""
                color="textSecondary"
                style={{
                    color: selected ? primary : white,
                }}
                className={`cursor-pointer ${styles.linkButton} ${
                    selected ? "font-semibold" : "font-regular"
                }`}
                onClick={() => {}}
            >
                {name}
            </Link>
        </Typography>
    );
};
