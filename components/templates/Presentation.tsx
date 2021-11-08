import React from "react";
import { SectionTitle } from "../molecules/SectionTitle";
import { About } from "../organisms/About";

export const Presentation = (props: { className?: string }) => {
    return (
        <div className={`flex flex-col justify-center ${props.className}`}>
            <SectionTitle>QUI SÓC</SectionTitle>
            <About name="David" surname="Camacho Cateura" />
        </div>
    );
};
