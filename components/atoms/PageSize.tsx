import React from "react";

export const PageSize = (props: { children: any }) => {
    return (
        <div className="w-screen max-w-screen-xl pl-8 pr-8 md:pl-16 md:pr-16">
            {props.children}
        </div>
    );
};
