import React from "react";
import { MenuElement } from "../atoms/MenuElement";

export const ListMenuElements = (props: { menuElementsNames: string[] }) => {
    const { menuElementsNames } = props;
    return (
        <div className="flex-row flex gap-28">
            {menuElementsNames.map((val, ind) => (
                <MenuElement
                    name={val}
                    onPressed={() => {}}
                    selected={false}
                    key={`menuElement${ind}`}
                />
            ))}
        </div>
    );
};
