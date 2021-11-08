import React from "react";
import { secondary } from "../../styles/customColors";
import { PageSize } from "../atoms/PageSize";
import { ListMenuElements } from "../molecules/ListMenuElements";

export const MenuBar = () => {
    return (
        <div
            style={{ backgroundColor: secondary }}
            className="w-full sticky top-0 flex justify-center pt-3 pb-3 z-50"
        >
            <PageSize>
                <ListMenuElements menuElementsNames={["INICI", "QUI SÓC"]} />
            </PageSize>
        </div>
    );
};
