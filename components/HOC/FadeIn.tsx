import React from "react";
import { CSSTransition } from "react-transition-group";

export const FadeIn = (props: { in: boolean }) => {
    return (
        <CSSTransition in={props.in} timeout={200} classNames="">
            <p>Hi</p>
        </CSSTransition>
    );
};
