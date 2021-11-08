import React from "react";
import { Hability, HabilityProps } from "../molecules/Hability";

export const GroupHabilities = (props: { habilities: HabilityProps[] }) => {
    return (
        <div className="grid gap-12 grid-cols-3">
            {props.habilities.map((hab, ind) => (
                <Hability {...hab} key={`hab${ind}`} />
            ))}
        </div>
    );
};
