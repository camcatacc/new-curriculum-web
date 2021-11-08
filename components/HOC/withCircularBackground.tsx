import React from "react";
import { secondary } from "../../styles/customColors";

export const CircularBackground = (props: {
    children: React.ReactNode;
    backgroundColor: string;
    height?: string | number;
    width?: string | number;
    padding?: string | number;
}) => {
    const { children, backgroundColor, height, width, padding } = props;
    return (
        <div
            className="rounded-full w-min h-min"
            style={{
                backgroundColor: backgroundColor,
                height: height,
                width: width,
                padding: padding,
            }}
        >
            {props.children}
        </div>
    );
};
